import React, {FC, memo, useContext} from "react";
import {Button, Image, Space, Spin, Table} from "antd";
import {DeleteOutlined, EditOutlined, SyncOutlined} from "@ant-design/icons";
import {Cats} from "interfaces";
import {FormInstance} from "antd/es/form";
import InfiniteScroll from "react-infinite-scroller";
import {storage} from "utils";
import {CatsContext} from "contexts/cats";
import "firebase/firestore";

interface Props {
    isLoading    : boolean,
    datasource   : Cats[],
    loadMoreData : () => Promise<void>,
    form         : FormInstance,
    deleteData   : (docId : string) => Promise<void>
}

const Lists : FC<Props> = ({isLoading, datasource, loadMoreData, form, deleteData}) => {

    const [, setVisible] = useContext(CatsContext);

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Gambar',
            dataIndex: 'imageURL',
            key: 'imageURL',
            render : (value : string) => (
                <div
                    style={{
                        width : 100,
                        overflow: "hidden",
                        borderRadius : 10
                    }}
                >
                    <Image style={{cursor: "pointer"}} wrapperStyle={{objectFit : "cover"}} src={value} alt={""}/>
                </div>
            )
        },
        {
            title: 'Judul',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Status',
            dataIndex: 'isSoldOut',
            key: 'isSoldOut',
        },
        {
            title: 'Deskripsi',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
            fixed: 'right' as 'right',
            width: 100,
            render : (value : string, item : Cats) => (
                <Space>
                    <Button
                        type={"primary"}
                        shape={"circle"}
                        ghost={true}
                        onClick={() => {
                            const newItem = {
                                ...item,
                                imageURL : {
                                    file : {
                                        name : item.imageURL,
                                        isPath : true,
                                        type : "image/jpg"
                                    }
                                }
                            }
                            form.setFieldsValue(newItem);
                            storage(window.location.pathname, value).store();
                            setVisible(true);
                        }}
                    >
                        <EditOutlined/>
                    </Button>
                    <Button
                        type={"primary"}
                        shape={"circle"}
                        ghost={true}
                        danger={true}
                        onClick={ async () => {
                            await deleteData(value)
                        }}
                    >
                        <DeleteOutlined />
                    </Button>
                </Space>
            )
        },
    ];

    return (
        <Spin spinning={isLoading} indicator={<SyncOutlined style={{ fontSize: 24 }} spin />}>
            <div className={"list-container"} style={{padding : 0}}>
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={loadMoreData}
                    hasMore={!isLoading}
                    useWindow={false}
                >
                    <div className={'user-list'}>
                        <Table
                            dataSource={datasource}
                            columns={columns}
                            pagination={false}
                        />
                    </div>
                </InfiniteScroll>
            </div>
        </Spin>
    )
}

export default memo(Lists);