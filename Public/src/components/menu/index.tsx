import React from "react";
import {Menu} from 'antd';

interface Props {
    mode : "vertical" | "horizontal" | "inline"
}

const Menus : React.FC<Props> = ({mode}) => {
    return (
        <Menu defaultSelectedKeys={['1']} mode={mode}>
            <Menu.Item key="1" >
                <a href={"/#banner"}>Home</a>
            </Menu.Item>
            <Menu.Item key="2" >
                <a href={"/#gallery"}>Gallery</a>
            </Menu.Item>
            <Menu.Item key="3" >
                <a href={"/#contact"}>Contact</a>
            </Menu.Item>
        </Menu>
    )
}

export default React.memo(Menus);