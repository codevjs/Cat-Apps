import firebase from "firebase/app";
import "firebase/firestore";

export async function read(collection : string, orderBy : "desc" | "asc" = "desc") : Promise<any[]>{
    return firebase.firestore()
        .collection(collection)
        .orderBy("createdAt", orderBy)
        .get()
        .then(snapshot => {
            let data: any[];
            data = [];
            snapshot.forEach(doc => {
                data.push({...doc.data(), key: doc.id});
            });
            return Promise.resolve(data);
        })
        .catch(error => {

            return Promise.reject(error);
        });
}

export async function readById(collection : string, docId : string) : Promise<any>{
    return firebase.firestore()
        .collection(collection)
        .doc(docId)
        .get()
        .then(doc => {

            return Promise.resolve({...doc.data(), key : doc.id});

        })
        .catch(error => {

            return Promise.reject(error);
        });
}


export async function readLimit(collection : string, limit : number, orderBy : "desc" | "asc" = "desc") : Promise<any[]>{
    return firebase.firestore()
        .collection(collection)
        .orderBy("createdAt", orderBy)
        .limit(limit)
        .get()
        .then(snapshot => {
            let data: any[];
            data = [];
            snapshot.forEach(doc => {
                data.push({...doc.data(), key: doc.id});
            });
            return Promise.resolve(data);
        })
        .catch(error => {

            return Promise.reject(error);
        });
}
