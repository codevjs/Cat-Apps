import firebase from "firebase/app";

export interface Cats {
    no?          : number,
    key?         : string,
    imageURL     : string,
    title        : string,
    isSoldOut    : string,
    description  : string,
    createdAt?   : firebase.firestore.Timestamp
}