import React, {useEffect, useState} from "react";
import {Button, Menu} from 'antd';
import {Link} from "react-router-dom";
import {LogoutOutlined} from "@ant-design/icons";
import useAuth from "hooks/login";
import data from "./data";

const Menus : React.FC = () => {

    const [selectedKeys, setSelectedKeys] = useState<string>('');
    const [, , signOut]                   = useAuth();

    useEffect(() => {

        let pathname : string = window.location.pathname;

        setSelectedKeys(pathname);
    }, [])

    return (
        <Menu
            className={"menu"}
            style={{ background : "transparent", width : "100%" }}
            defaultSelectedKeys={['/kelola/dashboard']}
            mode="inline"
            selectedKeys={[selectedKeys]}
        >
            <div className={"logo"}>
                <img
                    width={150}
                    src={"/images/dashboard.svg"}
                    alt={"logo"}
                />
            </div>

            <Menu.Item disabled={true}>
                <h4 style={{color : "#7A7E87"}}>Utama</h4>
            </Menu.Item>

            {
                data.main.map(item => (
                    <Menu.Item key={item.link}>
                        <Link to={item.link}>
                            <Button>
                                {item.icon}
                            </Button>
                            {item.title}
                        </Link>
                    </Menu.Item>
                ))
            }

            <Menu.Item key={"logout"}>
                <Link to={"#"} onClick={signOut}>
                    <Button>
                        <LogoutOutlined style={{fontSize : 18}} />
                    </Button>
                    Keluar
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default React.memo(Menus);