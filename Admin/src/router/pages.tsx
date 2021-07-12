import React from 'react';

interface Pages {
    path      : string,
    isPublic  : boolean,
    component : React.LazyExoticComponent<React.FC>,
    role      : string[]
}

let pages : Pages[] = [
    {
        path      : "/kelola/dashboard",
        isPublic  : false,
        component : React.lazy(() => import('../pages/cats')),
        role      : ["admin"]
    },
    {
        path      : "/kelola/halaman-depan",
        isPublic  : false,
        component : React.lazy(() => import('../pages/frontpage')),
        role      : ["admin"]
    },
    {
        path      : "/",
        isPublic  : true,
        component : React.lazy(() => import('../pages/login')),
        role      : []
    }
]

export default pages