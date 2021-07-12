import React, {useContext} from "react";
import {Drawer, Space} from "antd";
import {DrawerContext} from "contexts/drawer";
import Menu from "../menu";
import {FacebookOutlined, InstagramOutlined, TwitterOutlined} from "@ant-design/icons";

const Sider : React.FC = () => {

    const [visible, setVisible] = useContext(DrawerContext);

    return (
        <Drawer
            title={null}
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            style={{padding: 0}}
        >
           <div className={"public-drawer"} style={{width: "100%"}}>
               <Menu mode={"vertical"} />
               <div className={"social-media"}>
                   <Space size={"large"}>
                       <a href={"https://www.facebook.com/wasdlabs"} target={"_blank"} rel={"noreferrer"}>
                           <FacebookOutlined />
                       </a>
                       <a href={"https://www.instagram.com/wasdlabs/"} target={"_blank"} rel={"noreferrer"}>
                           <InstagramOutlined />
                       </a>
                       <a href={"https://www.facebook.com/wasdlabs"} target={"_blank"} rel={"noreferrer"}>
                           <TwitterOutlined />
                       </a>
                   </Space>
               </div>
           </div>
        </Drawer>
    )
}

export default React.memo(Sider);