import firebase from "firebase/app";
import "firebase/firestore";

function update(collection : string, docId : string, data : object) : Promise<void> {
    return firebase.firestore()
        .collection(collection)
        .doc(docId)
        .update({...data, createdAt : firebase.firestore.FieldValue.serverTimestamp()})
}

export default update