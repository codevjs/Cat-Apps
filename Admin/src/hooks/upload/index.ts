import {RcFile, UploadFile} from "antd/lib/upload/interface";
import {Dispatch, useState} from "react";
import {notification} from "antd";
import uploadFile from "services/upload";

export function useUpload() : [fileList : UploadFile[], setFileList : Dispatch<UploadFile[]>, isLoading : boolean, upload : (file : RcFile, folderName : string) => boolean] {

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const upload = (file : RcFile, folderName : string) : boolean => {

        const isImage = file.type === 'image/png' || file.type === 'image/jpg' ||  file.type === 'image/jpeg';

        if (!isImage) {

            notification.error({
                message     : "File tidak sesuai",
                description : "File yang dipilih harus berupa gambar!"
            });

            return false
        }

        setLoading(true);

        uploadFile(`/${folderName}/${file.uid}`, file, percent => {

            if (percent < 100) {

                setFileList([{...file, status: 'uploading', percent, name : file.name}]);
            }
        })
            .then(() => {

                setFileList([{...file, status: 'success', url : `https://storage.googleapis.com/new-etc.appspot.com/froala/${folderName}/${file.uid}`, name : file.name}]);

            })
            .catch(error => {

                setFileList([]);

                notification.error({
                    message     : error.message,
                    description : error.description
                });

            })
            .finally(() => {

                setLoading(false);
            })

        return false
    }

    return [fileList, setFileList, isLoading, upload];
}
