import React from "react";
import {Col, Image, Modal, Row, Skeleton, Tag} from "antd";
import useFetch from "hooks/fetch";
import {Cats} from "interfaces";
import {CloseCircleOutlined} from "@ant-design/icons";
import Lazyload from "react-lazyload";

const Gallery : React.FC = () => {

    const [isLoading, datasource] = useFetch("cats", "desc", false, 6);

    /**
     *
     * @param img
     * @param title
     * @param desc
     */
    const openModal = (img : string | undefined, title : string, desc : string, isSoldOut : boolean) : void => {
        Modal.info({
            className     : "detail-gallery",
            title         : null,
            icon          : null,
            width         : 500,
            closable      : true,
            centered      : false,
            closeIcon     : <CloseCircleOutlined style={{fontSize : 20, color : "#ffffff"}} />,
            okText        : "Buy",
            okButtonProps : {disabled : isSoldOut},
            style         : {padding : 0, overflow : "hidden"},
            bodyStyle     : {padding : 0},
            onOk          : () => {

              window.open("https://wa.me/6281939080513/?text=Saya%20tertarik%20dengan%20" + title.replace(/ /g, "%20"))
            },
            content       : (
                <div>
                    <Lazyload height={"100%"} once={true}>
                        <Image
                            width={"100%"}
                            src={img}
                            alt={title}
                            style={{ marginTop : "-8px", borderRadius : "5px 5px 0 0", cursor: "pointer"}}
                        />
                    </Lazyload>
                    <div style={{padding : "23px 20px"}}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <section id={"gallery"} className={"main-gallery"}>
            <div className={"public-container"}>
                <Row gutter={[50, 10]}>
                    <Col md={8} sm={24} xs={24}>
                        <div className={"section-heading"}>
                            <h2 className={"title"}>Gallery</h2>
                            <p className={"subtitle"}>Cattery and Import Cat Rusia Ukraine China</p>
                        </div>
                    </Col>
                    <Col md={16} sm={24} xs={24}>
                        <Row gutter={[20, 10]}>
                            {
                                (isLoading ? new Array(25).fill(1, 0, 6) : datasource)
                                    .map((item : Cats, x: number) => (
                                        <Col key={x} lg={12} md={12} sm={24} xs={24}>
                                            <Lazyload height={1000} once={true}>
                                                <div
                                                    onClick={() => {
                                                        openModal(item.imageURL, item.title, item.description, item.isSoldOut === "terjual");
                                                    }}
                                                    className={"gallery-list"}
                                                >
                                                    <div className={"section-image"}>
                                                        <div className={"tag"}>
                                                            {
                                                                !isLoading
                                                                    ? item.isSoldOut === "terjual"
                                                                        ? <Tag color="red">Sold Out</Tag>
                                                                        : <Tag color="green">Ready</Tag>
                                                                    :null
                                                            }
                                                        </div>
                                                        {
                                                            isLoading
                                                                ? <Skeleton.Avatar size={500} shape={"square"} active={true} />
                                                                : <img
                                                                    width={"100%"} height={"100%"}
                                                                    style={{cursor : "pointer"}}
                                                                    src={item.imageURL}
                                                                    alt={item.title}
                                                                />

                                                        }
                                                    </div>
                                                    <div className={"section-text"}>
                                                        <h3>{item.title}</h3>
                                                        <p>{
                                                            item.description?.length > 100
                                                                ? item.description.slice(0, 100) + " ..."
                                                                : item.description
                                                        }</p>
                                                    </div>
                                                </div>
                                            </Lazyload>
                                        </Col>
                                    ))
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default React.memo(Gallery);