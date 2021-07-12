import React, {useContext} from "react";
import {Button} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {DrawerContext} from "contexts/drawer";

const Trigger : React.FC = () => {

    const [, setVisible] = useContext(DrawerContext);

    return (
        <div className={"drawer-button"}>
            <Button type={"primary"} shape={"circle"} onClick={() => setVisible(true)}>
                <MenuOutlined />
            </Button>
        </div>
    )
}

export default React.memo(Trigger);