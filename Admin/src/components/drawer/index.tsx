import React, {useContext} from "react";
import {Drawer} from "antd";
import {DrawerContext} from "contexts/drawer";
import Menu from "../menu";

const Drawers : React.FC = () => {

    const [visible, setVisible] = useContext(DrawerContext);

    return (
      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        closable={false}
        placement={"left"}
        className={"admin-drawer"}
      >
          <Menu />
      </Drawer>
    )
}

export default Drawers