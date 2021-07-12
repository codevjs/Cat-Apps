import {useCallback, useEffect, useState} from "react";
import {notification} from "antd";
import firebase from "firebase/app";
import "firebase/storage";

type Values = [
    isLoading : boolean,
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

    useEffect(() => {

        getBannerURL();

    }, [getBannerURL]);

    return [isLoading,bannerURL];
}

export default useFrontpage;