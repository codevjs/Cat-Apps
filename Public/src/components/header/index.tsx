import React, {useContext} from "react";
import {Button, Layout, Space} from "antd";
import {FacebookOutlined, InstagramOutlined, MenuOutlined, TwitterOutlined} from "@ant-design/icons"
import Menu from "../menu";
import {DrawerContext} from "contexts/drawer";

const Header: React.FC = () => {

    const [, setVisible] = useContext(DrawerContext);

    // useEffect(() => {
    //
    //     let navbar = document.getElementById("navbar");
    //
    //     window.onscroll = () => {
    //         if (window.pageYOffset > 100) {
    //             navbar?.classList.add("scrolled")
    //         } else {
    //             navbar?.classList.remove("scrolled")
    //         }
    //     }
    // }, [])

    return (
        <Layout.Header id={"navbar"} className="public-header">
           <div className={"public-container"}>
               <div className={"logo"}>
                   <img width={100} src={"/logo.png"} alt={"Logo"}/>
               </div>

               <div className={"social-media"}>
                   <Space size={"large"}>
                       <a
                           href={"https://web.facebook.com/arie.shadega.96"}
                           target={"_blank"}
                           rel={"noreferrer"}
                       >
                           <FacebookOutlined />
                       </a>
                       <a
                           href={"https://www.instagram.com/straight_path_concept/"}
                           target={"_blank"}
                           rel={"noreferrer"}
                       >
                           <InstagramOutlined />
                       </a>
                       <a
                           href={"https://web.facebook.com/arie.shadega.96"}
                           target={"_blank"}
                           rel={"noreferrer"}
                       >
                           <TwitterOutlined />
                       </a>
                   </Space>

               </div>

               <div className={"button-menu"}>
                   <Button shape={"circle"} type={"primary"} ghost={true} onClick={() => setVisible(true)}>
                       <MenuOutlined />
                   </Button>
               </div>

               <div className={"navigation"}>
                   <Menu mode={"horizontal"} />
               </div>

           </div>
        </Layout.Header>
    )
}

export default React.memo(Header);