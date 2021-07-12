import React from "react";
import {Carousel, Col, Row} from "antd";
import data from "./data";

const Testimonials : React.FC = () => {

    return (
        <section id={"testimonial"} className={"main-testimonial"}>
            <div className={"public-container"}>
                <Row gutter={[50, 10]}>
                    <Col md={8} sm={24} xs={24}>
                        <div className={"section-heading"}>
                            <h2 className={"title"}>{data.testimonial.id.title}</h2>
                        </div>
                    </Col>
                    <Col md={16} sm={24} xs={24}>
                        <div className={"carousel-section"} style={{textAlign : "center"}}>
                            <Carousel
                                autoplay={true}
                                dots={{className : "cr-dots"}}
                            >
                                <div>
                                   <Row gutter={[10, 10]}>
                                       <Col md={12}>
                                           <img
                                               style={{borderRadius: "10px"}}
                                               width={"100%"}
                                               src={`/images/testimoni/${1}.jpg`}
                                               alt={""}
                                           />
                                       </Col>
                                       <Col md={12}>
                                           <img
                                               style={{borderRadius: "10px"}}
                                               width={"100%"}
                                               src={`/images/testimoni/${2}.jpg`}
                                               alt={""}
                                           />
                                       </Col>
                                   </Row>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default React.memo(Testimonials);