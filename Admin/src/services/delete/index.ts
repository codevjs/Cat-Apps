import firebase from "firebase/app";
import "firebase/firestore";

function remove(collection : string, docId : string) : Promise<void> {
    return firebase.firestore()
        .collection(collection)
        .doc(docId)
        .delete()
}

export default remove;