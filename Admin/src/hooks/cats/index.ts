import {useCallback, useContext, useEffect, useState} from "react";
import {Modal, notification} from "antd";
import {read} from "services/read";
import {generateKeyword, setNumber, storage} from "utils";
import {Cats} from "interfaces";
import {CatsContext} from "contexts/cats";
import update from "services/update";
import {FormInstance} from "antd/es/form";
import firebase from "firebase/app";
import "firebase/firestore";
import remove from "services/delete";
import create from "services/create";
import {Store} from "rc-field-form/lib/interface";
import uploadFile from "services/upload";

type Values = [
    isLoading    : boolean,
    datasource   : Cats[],
    loadMoreData : () => Promise<void>,
    createData   : (values : Store) => Promise<void>,
    updateData   : (docId : string, data : Cats) => Promise<void>,
    deleteData   : (docId : string) => Promise<void>,
]

function useCats(form : FormInstance | undefined) : Values {

    const [, setVisible, search]      = useContext(CatsContext);
    const [isLoading, setLoading]     = useState<boolean>(false);
    const [datasource, setDatasource] = useState<Cats[]>([]);
    const [lastDoc, setLastDoc]       = useState<firebase.firestore.QuerySnapshot | undefined>();

    const reset = useCallback(() => {

        form?.resetFields();

        storage(window.location.pathname).destroy();

        setVisible(false);

        setLoading(false);

    }, [form, setVisible]);

    const readData = useCallback( async () => {
        try {

            setLoading(true);

            const result = await read("cats", {fieldPath : "createdAt", direction : "desc"}, undefined, {fieldPath : "keywords", value : search});

            setDatasource(setNumber(result.data));

            setLastDoc(result.lastDoc);

        } catch (e) {

            notification.error({
                message : e.message,
                description : e.description
            });
        } finally {

            setLoading(false);
        }
    }, [search]);

    const loadMoreData = useCallback(async () => {
        try {

            setLoading(true);

            const result = await read("cats", {fieldPath : "createdAt", direction : "desc"}, lastDoc, {fieldPath : "keywords", value : search});

            setDatasource(currentValue => setNumber(currentValue.concat(result.data)));

            setLastDoc(result.lastDoc);

        } catch (e) {

            notification.error({
                message : e.message,
                description : e.description
            });
        } finally {

            setLoading(false);
        }
    }, [lastDoc, search]);

    const createData = useCallback(async (values : Store) => {
        try {

            setLoading(true);

            const image = values[`imageURL`]?.file

            const fileName = `${image.uid}-${image.name}`;

            await uploadFile(`/cats/${fileName}`, image);

            delete values[`imageURL`];

            await create("cats", {
                ...values,
                imageURL : `https://storage.googleapis.com/scotish-fold.appspot.com/cats/${fileName}`,
                keywords : generateKeyword(`${values.title}  ${values.isSoldOut}`)
            });

            notification.success({
                message : `Listing berhasil ditambahkan`
            });

        } catch (e) {

            notification.error({
                message : e.message,
                description : e.description
            });
        } finally {

            await readData();

            reset();
        }
    }, [readData, reset]);

    const updateData = useCallback( async (docId : string, values : Store) => {
        try {

            setLoading(true);

            if (values[`imageURL`]?.file.isPath){

                delete values[`imageURL`];

                await update("cats", docId, {
                    ...values,
                    keywords : generateKeyword(`${values.title} ${values.isSoldOut}`)
                });

            } else {

                const image = values[`imageURL`]?.file

                const fileName = `${image.uid}-${image.name}`;

                await uploadFile(`/cats/${fileName}`, image);

                delete values[`imageURL`];

                await update("cats", docId, {
                    ...values,
                    imageURL : `https://storage.googleapis.com/scotish-fold.appspot.com/cats/${fileName}`,
                    keywords : generateKeyword(`${values.title} ${values.isSoldOut}`)
                });
            }

            notification.success({ message : `Listing berhasil diperbarui.`});

        } catch (e) {

            notification.error({
                message : e.message,
                description : e.description
            })

        } finally {

            await readData();

            reset();
        }
    }, [readData, reset]);

    const deleteData = useCallback( async (docId : string) => {

        Modal.confirm({
            title : `Apa anda yakin menghapus listing ini?`,
            okText : "Ya, saya yakin",
            cancelText : "Batal",
            icon : null,
            centered : true,
            onOk : async () => {
                try {

                    setLoading(true);

                    await remove("cats", docId);

                    notification.success({
                        message : `Listing berhasil dihapus.`
                    });

                } catch (e) {

                    notification.error({
                        message : e.message,
                        description : e.description
                    })
                } finally {

                    await readData();

                    setLoading(false);
                }
            }
        })
    }, [readData]);

    useEffect(() => {

        readData();

    }, [readData]);

    return [isLoading, datasource, loadMoreData, createData, updateData, deleteData];
}

export default useCats;