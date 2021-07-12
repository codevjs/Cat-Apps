import {useCallback, useEffect, useState} from "react";
import {notification} from "antd";
import {read, readLimit} from "services/read";

type useHomeValue = [
    isLoading : boolean,
    dataSource : any[]
]

export default function useHome(
    collection    : string,
    sortDirection : "desc" | "asc" = "desc",
    useLimit      : boolean = false,
    limit         : number = 10
) : useHomeValue {

    const [isLoading, setLoading]     = useState<boolean>(false);
    const [dataSource, setDataSource] = useState<any[]>([]);

    const readData   = useCallback(async () : Promise<void> => {
        try {

            let snapshot : any[];

            setLoading(true);

            if (useLimit)
                snapshot  = await readLimit(collection, limit, sortDirection);
            else
                snapshot = await read(collection, sortDirection);


            setDataSource(snapshot);

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

    return [isLoading, dataSource];
}
