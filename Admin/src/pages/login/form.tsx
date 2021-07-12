import React from "react";
import {Row, Col, Form, Input, Checkbox, Button} from "antd";
import {MailOutlined, LockOutlined} from "@ant-design/icons";
import useAuth from "hooks/login"

const FormLogin : React.FC = () => {

    const [form]              = Form.useForm();
    const [isLoading, signIn] = useAuth(form);

    return (
        <div className={"login-card"}>
            <Row gutter={16}>
                <Col span={24}>
                    <section style={{textAlign: "center"}}>
                        <img
                            width={250}
                            style={{margin: "50px 0 10px"}} src={"/logo.png"}
                            alt={"Logo"}
                        />
                    </section>
                    <section style={{padding : "20px 20px 0"}}>
                            <Form
                                form={form}
                                onFinish={signIn}
                                name="basic"
                                initialValues={{ remember: true }}
                                layout={"vertical"}
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Email wajib diisi.' }]}
                                >
                                    <Input prefix={<MailOutlined />} type={"email"} size={"large"} />
                                </Form.Item>

                                <Form.Item
                                    label="Kata Sandi"
                                    name="password"
                                    rules={[{ required: true, message: 'Kata sandi wajib diisi.' }]}
                                >
                                    <Input.Password prefix={<LockOutlined />} size={"large"} />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Ingat Saya</Checkbox>
                                </Form.Item>

                                <Form.Item style={{textAlign: "center"}}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size={"large"}
                                        loading={isLoading as boolean}
                                        style={{width : "100%"}}
                                    >
                                        Masuk
                                    </Button>
                                </Form.Item>
                            </Form>
                    </section>
                </Col>
            </Row>
        </div>
    )
}

export default React.memo(FormLogin);