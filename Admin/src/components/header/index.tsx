import React from "react";
import { Layout} from "antd";

const Header: React.FC = () => {

    return (
        <Layout.Header className="dashboard-header">
            hello world
        </Layout.Header>
    )
}

export default React.memo(Header);