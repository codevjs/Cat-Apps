import {useCallback, useEffect, useState} from "react";
import uploadFile from "services/upload";
import {notification} from "antd";
import firebase from "firebase/app";
import "firebase/storage";
import {RcFile} from "antd/lib/upload/interface";

type Values = [
    isLoading : boolean,
    onFinish: (file : RcFile, fileList : RcFile[]) => Promise<void>,
    bannerURL : string
]

function useFrontpage() : Values {

    const [isLoading, setLoading] = useState<boolean>(false);
    const [bannerURL, setBannerURL] = useState<string>("");

    const getBannerURL = useCallback(async () => {
        try {
            setLoading(true);

            const storage = firebase.storage();

            const storageRef = storage.ref("/frontpage/banner/");

            const url = await storageRef.child("front-page-banner").getDownloadURL();

            setBannerURL(url);

        } catch (e) {

            notification.error({message : e.message});
        } finally {

            setLoading(false);
        }
    }, []);

    const upload = useCallback(async (file : RcFile, fileList : RcFile[]) => {
        try {

            setLoading(true);

            const types = ['image/jpg', 'image/jpeg', 'image/png', "image/svg", "image/svg+xml"];

            if (!types.includes(file.type)) {

                notification.error({
                    message : "File yang diunggah harus berupa png atau svg."
                })
            } else {

                await uploadFile(`/frontpage/banner/front-page-banner`, file);

                notification.success({message : "Banner berhasil diperbarui"});
            }
        } catch (e) {

            notification.error({message : e.message});
        } finally {

            setLoading(false);

            await getBannerURL();
        }
    }, [getBannerURL]);

    useEffect(() => {

        getBannerURL();

    }, [getBannerURL]);

    return [isLoading, upload, bannerURL];
}

export default useFrontpage;