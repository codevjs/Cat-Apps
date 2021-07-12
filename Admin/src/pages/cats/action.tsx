import React, {FC, memo, useContext} from "react";
import {Button, Input, Space} from "antd";
import {CatsContext} from "contexts/cats";
import {PlusOutlined} from "@ant-design/icons";

interface Props {

}

const Actions : FC<Props> = () => {

    const [, setVisible,, setSearch] = useContext(CatsContext);;

    return (
        <div className={"action-container"}>
            <div className={"action-section"}>
                <Space>
                    <Input.Search placeholder={"Cari..."} onSearch={(value) => setSearch(value)} />
                    <Button type={"primary"} shape={"circle"} onClick={() => { setVisible(true) }}>
                        <PlusOutlined />
                    </Button>
                </Space>
            </div>
        </div>
    )
}

export default memo(Actions);