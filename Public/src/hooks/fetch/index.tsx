import {useCallback, useEffect, useState} from "react";
import {notification} from "antd";
import {read, readById, readLimit} from "services/read";

export function useFetchById(collection : string, docId : string) {
    
    const [isLoading, setLoading]     = useState<boolean>(false);
    const [datasource, setDatasource] = useState<any>({});

    const readData   = useCallback(async () : Promise<void> => {
        try {

            setLoading(true);
            
            const snapshot = await readById(collection, docId)

            setDatasource(snapshot);

        } catch (error) {

            notification.error({
                message : error.message,
                description : error.description
            });

        } finally {

            setLoading(false)
        }

    }, [collection, docId]);

    useEffect(() => {
        ( async () => readData())();

    }, [readData]);

    return [isLoading, datasource];
}

type useFetchValue = [
    isLoading : boolean,
    datasource : any[]
]

export default function useFetch(
    collection    : string,
    sortDirection : "desc" | "asc" = "desc",
    useLimit      : boolean = false,
    limit         : number = 10
) : useFetchValue {

    const [isLoading, setLoading]     = useState<boolean>(false);
    const [datasource, setDatasource] = useState<any[]>([]);

    const readData   = useCallback(async () : Promise<void> => {
        try {

            let snapshot : any[];

            setLoading(true);

            if (useLimit)
                snapshot  = await readLimit(collection, limit, sortDirection);
            else
                snapshot = await read(collection, sortDirection);

            setDatasource(snapshot);

        } catch (error) {

            notification.error({
                message : error.message,
                description : error.description
            });

        } finally {

            setLoading(false)
        }

    }, [collection, sortDirection, limit, useLimit]);

    useEffect(() => {

        ( async () => readData())()
    }, [readData]);

    return [isLoading, datasource];
}
