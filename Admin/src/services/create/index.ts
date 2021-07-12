import firebase from "firebase/app";
import "firebase/firestore";

function create(collection : string, data : object) : Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> {

    return firebase.firestore().collection(collection).add({...data, createdAt : firebase.firestore.FieldValue.serverTimestamp()});
}

export default create;