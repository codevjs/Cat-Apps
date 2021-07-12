import React, {useContext} from "react";
import {Button, Form, Input, Modal, Select, Space, Upload} from "antd";
import {CatsContext} from "contexts/cats";
import {storage} from "utils";
import {FormInstance} from "antd/es/form";
import {Cats} from "interfaces";
import {UploadOutlined} from "@ant-design/icons";
import {Store} from "rc-field-form/lib/interface";

interface Props {
    isLoading   : boolean,
    form        : FormInstance,
    updateData  : (docId : string, data : Cats) => Promise<void>,
    createData  : (values : Store) => Promise<void>,
}

const Modals : React.FC<Props> = ({isLoading, form, updateData, createData}) => {

    const [visible, setVisible] = useContext(CatsContext);
    const docId                 = storage(window.location.pathname).get();

    return (
        <Modal
            title={null}
            centered={true}
            closable={false}
            visible={visible}
            footer={null}
            className={"cats-modal-container"}
        >
            <Form
                layout={"vertical"}
                form={form}
                onFinish={values => docId ? updateData(docId as string, values) : createData(values)}
            >

                <Form.Item shouldUpdate={true} noStyle={true}>
                    {
                        (form) => (
                            <Form.Item
                                label="Gambar"
                                name={`imageURL`}
                                rules={[{required: true, message: 'Gambar wajib diisi!'},
                                    () => ({
                                        validator(_, value) {

                                            const type = ['image/jpg', 'image/jpeg', 'image/png'];

                                            if (type.includes(value?.file.type)) {

                                                return Promise.resolve()
                                            } else {

                                                return Promise.reject(new Error("File harus berupa gambar."))
                                            }
                                        }
                                    })
                                ]}
                            >
                                <Upload
                                    style={{width : "100%"}}
                                    fileList={[]}
                                    beforeUpload={() => false}
                                >
                                    <div className={"image-form"}>
                                        <Space>
                                            <Button
                                                type={"default"}
                                                icon={<UploadOutlined />}
                                                ghost={false}
                                                shape={"circle"}
                                                size={"small"}
                                            />
                                            {form.getFieldValue(`imageURL`)?.file?.name}
                                        </Space>
                                    </div>

                                </Upload>
                            </Form.Item>
                        )
                    }
                </Form.Item>

                <Form.Item
                    label="Judul"
                    name={`title`}
                    rules={[{ required: true, message: 'Judul wajib diisi!' }]}
                >
                    <Input size={"large"} />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name={"isSoldOut"}
                    rules={[{ required: true, message: 'Status akun wajin diisi.' }]}
                >
                    <Select size={"large"}>
                        <Select.Option value={'terjual'}>Terjual</Select.Option>
                        <Select.Option value={'belum'}>Belum Terjual</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Deskripsi"
                    name={`description`}
                    rules={[{ required: true, message: 'Deskripsi wajib diisi!' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item>
                    <div style={{textAlign : "right"}}>
                        <Space>
                            <Button
                                size={"large"}
                                type={"default"}
                                onClick={() => {
                                    form.resetFields();
                                    setVisible(false);
                                    storage(window.location.pathname).destroy();
                                }}
                                disabled={isLoading}
                            >
                                Batal
                            </Button>
                            <Button
                                size={"large"}
                                type={"primary"}
                                htmlType={"submit"}
                                loading={isLoading}
                            >
                                Simpan
                            </Button>
                        </Space>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default React.memo(Modals);