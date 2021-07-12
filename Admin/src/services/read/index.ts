import firebase from "firebase/app";
import "firebase/firestore";

export const parseData = (snapshot : firebase.firestore.QuerySnapshot) => {

    let data: any[];

    data = [];

    snapshot.forEach(doc => {

        data.push({...doc.data(), key: doc.id});
    });

    return data;
}

const resolveHandling = (snapshot : firebase.firestore.QuerySnapshot) => {
    return Promise.resolve({
        data    : !snapshot.empty ? parseData(snapshot) : [],
        lastDoc : !snapshot.empty ? snapshot.docs[snapshot.docs.length - 1] : null
    });
}

const rejectHandling = (error : Error) => {
    return Promise.reject(error);
}

export async function read(collection : string, orderBy : {fieldPath : string, direction : "desc" | "asc"}, lastDoc : firebase.firestore.QuerySnapshot | undefined = undefined, search : { fieldPath : string, value : string}) : Promise<any>{

    return lastDoc !== undefined
        ? firebase.firestore()
            .collection(collection)
            .where(search.fieldPath, "array-contains", search.value)
            .orderBy(orderBy.fieldPath, orderBy.direction)
            .startAfter(lastDoc)
            .limit(10)
            .get()
            .then(resolveHandling)
            .catch(rejectHandling)

        : firebase.firestore()
            .collection(collection)
            .where(search.fieldPath, "array-contains", search.value)
            .orderBy(orderBy.fieldPath, orderBy.direction)
            .limit(20)
            .get()
            .then(resolveHandling)
            .catch(rejectHandling);
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

export async function readAll(collection : string) : Promise<any> {
    return firebase.firestore()
        .collection(collection)
        .get()
        .then(resolveHandling)
        .catch(rejectHandling)
}

export async function readWhere(collection : string, filePath : string, operator : firebase.firestore.WhereFilterOp, value : string) {
    return firebase.firestore()
        .collection(collection)
        .where(filePath, operator, value)
        .get()
        .then(resolveHandling)
        .catch(rejectHandling)
}