import React from "react";
import {Button, Col, Row, Space} from "antd";
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    PhoneOutlined,
    WhatsAppOutlined,
    HomeOutlined
}
from "@ant-design/icons";
import data from "./data";

const Footer : React.FC = () => {
    return (
        <footer id={"contact"} className={"public-footer"}>
            <div className={"public-container"}>
                <Row gutter={[300, 50]}>
                    <Col lg={12} md={12} sm={24} xs={24}>
                       <div className={"section-heading"}>
                           <h2>{data.id.title}</h2>
                           <p>{data.id.subTitle}</p>
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
                                    href={"https://www.instagram.com/straight_path_concept/"}
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                >
                                    <TwitterOutlined />
                                </a>
                            </Space>
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <div className={"contact"}>
                            <div className={"phone"}>
                                <Space size={"middle"}>
                                    <PhoneOutlined />
                                    +62 819-3908-0513
                                </Space>
                            </div>
                            <div className={"wa"}>
                                <Space size={"middle"}>
                                    <WhatsAppOutlined />
                                    +62 819-3908-0513
                                </Space>
                            </div>
                            {/*<div className={"email"}>*/}
                            {/*    <Space size={"middle"}>*/}
                            {/*        <MailOutlined />*/}
                            {/*        hello@etc-cat.com*/}
                            {/*    </Space>*/}
                            {/*</div>*/}
                            <div className={"address"}>
                                <Space align={"start"} size={"middle"}>
                                    <HomeOutlined />
                                    Perumahan griya wijaya kusuma blok c nmor 12 a kedungkandang malang jalan tutut arjowinagun
                                </Space>
                            </div>
                            <div className={"footer-buttons"}>
                                <Space size={"middle"}>
                                    <Button
                                        size={"large"}
                                        ghost={true}
                                        href={"https://goo.gl/maps/Z8bUcTmvqo8GV3u46"}
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        Get Direction
                                    </Button>
                                    <Button
                                        size={"large"}
                                        ghost={true}
                                        href={"tel:+6281939080513"}
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        Call Now
                                    </Button>
                                    <Button
                                        size={"large"}
                                        ghost={true}
                                        href={"https://wa.me/6281939080513"}
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        Chat
                                    </Button>
                                </Space>
                            </div>
                        </div>
                    </Col>
                </Row>
                <p>Made with love by British Short Hair & Scottish Fold</p>
            </div>
        </footer>
    )
}

export default Footer;