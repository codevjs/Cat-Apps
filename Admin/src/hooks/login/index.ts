import {useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {notification} from "antd";
import {Store, FormInstance} from "rc-field-form/lib/interface";

function useLogin(form? : FormInstance) : [isLoading : boolean, signIn: (values : Store) => Promise<void>, signOut: () => Promise<void>] {

    const [isLoading, setLoading] = useState<boolean>(false);

    const signIn  = async (values : Store) : Promise<void> => {
        try {

            setLoading(true);

            await firebase.auth().signInWithEmailAndPassword(values.email, values.password);

        } catch (error) {

            notification["error"]({
                message : error.message,
                description : error.description
            });

            form && form.resetFields();

        } finally {

            setLoading(false);
        }
    }

    const signOut = async () : Promise<void> => {

        await firebase.auth().signOut();
    }

    return [isLoading, signIn, signOut]
}

export default useLogin;