import React from "react";
import Component from "components";
import {CatsProvider} from "contexts/cats";
import {Form} from "antd";
import useUser from "hooks/cats";
import Actions from "./action";
import Modals from "./modal";
import Lists from "./list";

const UserComponent : React.FC = () => {

    const [form] = Form.useForm();
    const [isLoading, datasource, loadMoreData, createData, updateData, deleteData] = useUser(form);

    return (
        <Component.Layout>
            <section className={"main-cats"}>
                <Actions />
                <Modals
                    isLoading={isLoading}
                    form={form}
                    updateData={updateData}
                    createData={createData}
                />
                <Lists
                    isLoading={isLoading}
                    datasource={datasource}
                    loadMoreData={loadMoreData}
                    deleteData={deleteData}
                    form={form}
                />
            </section>
        </Component.Layout>
    )
}

const Wrapper : React.FC = () => {

    return (
        <CatsProvider>
            <UserComponent />
        </CatsProvider>
    )
}

export default Wrapper