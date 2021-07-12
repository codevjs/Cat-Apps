import firebase from "firebase/app";
import "firebase/storage";
import {RcFile} from "antd/lib/upload/interface";

function uploadFile(ref : string,  file : RcFile | File, cb? : (percent : number) => void) : Promise<string> {

    return new Promise<string>((resolve, reject) => {

        // Create a root reference
        let storageRef = firebase.storage().ref();
        let fileRef    = storageRef.child(ref);
        let uploadTask = fileRef.put(file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', (snapshot) => {

            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            if (cb) cb(progress)

        }, (error) => {

            // Handle unsuccessful uploads
            return reject(error)
        }, () => {

            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

                return resolve(downloadURL);
            });
        });
    })
}

export default uploadFile