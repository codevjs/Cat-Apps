import React from "react";
import {
    LineChartOutlined,
    DesktopOutlined
} from "@ant-design/icons";

const data = {
    main : [
        {
            title : "Dashboard",
            link  : "/kelola/dashboard",
            icon  : <LineChartOutlined style={{fontSize : 18}} />,
            role  : ["admin"]
        }, {
            title : "Halaman depan",
            link  : "/kelola/halaman-depan",
            icon  : <DesktopOutlined style={{fontSize : 18}} />,
            role  : ["admin"]
        }
    ]
}

export default data