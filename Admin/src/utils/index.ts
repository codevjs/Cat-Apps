export const sleep = (ms : number) : Promise<void> => {

    return new Promise<void>(resolve => {

        setTimeout(() => resolve(), ms)
    });
}

const createKeyword = (title : string) => {

    const arrTitle : string[] = [];
    let currTitle  = "";

    title.split("").forEach(item => {
        currTitle += item;
        arrTitle.push(currTitle);
    })

    return arrTitle;
};

export const generateKeyword = (title : string) => {

    const keywords = [];
    const titles   = title.toLowerCase().split(" ");

    for (let i in titles) {

        keywords.push(...createKeyword(titles.slice(Number(i), titles.length).join(" ")))
    }

    return [
        // @ts-ignore
        ...new Set(["", ...keywords])
    ]
};

export const storage = (key : string, value : string = "") => {

    function get() : string | null {

        return localStorage.getItem(key)
    }

    function store() : void {

        localStorage.setItem(key, value);
    }

    function destroy() {

        if (key === "all") {

            localStorage.clear();
        } else {

            localStorage.removeItem(key);
        }
    }


    return {
        get,
        store,
        destroy
    }
}

export const setNumber = (arr : any[]) => {

    return arr.map((item, index) => ({...item, no : index + 1}));
}

export const pagination = (array : any[], page_size : number, page_number : number)  : any[] => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};

export const filter = (report : any[], fields : string[], value : string) => {

    return report.filter(item => {

        let keywords = fields.map(field => item[field]).join(" ");

        return keywords.toLowerCase().search(value) !== -1;
    });
}