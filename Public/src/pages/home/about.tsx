import React from "react";
import {Row, Col} from "antd";
import data from "./data";

const About : React.FC = () => {
    return (
        <section id={"about"} className={"main-about"}>
            <div className={"public-container"}>
                <Row gutter={[50, 10]}>
                    <Col md={8} sm={24} xs={24}>
                        <div className={"section-heading"}>
                            <h2 className={"title"}>{data.about.id.title}</h2>
                        </div>
                    </Col>
                    <Col md={16} sm={24} xs={24}>
                        <div className={"card-wrapper"}>
                            <p className={"subtitle"}>{data.about.id.subTitle}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default React.memo(About);