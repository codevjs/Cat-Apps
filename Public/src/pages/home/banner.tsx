import React from "react";
import {Col, Row} from "antd";
import useFrontpage from "hooks/frontpage";

const Banner : React.FC = () => {

    const [, bannerURL] = useFrontpage();

    return (
        <section style={{backgroundImage : `url(${bannerURL})`}} id={"banner"} className={"main-banner"}>
            <div className={"foreground"} />
            <div className={"public-container"}>
                <Row gutter={[50, 30]} className={"describe"}>
                    <Col md={{push : 13, span : 11}}  sm={24} xs={24}>
                        <div className={"sub-banner"}>
                            {/*<img src={bannerURL} alt={" "} />*/}
                        </div>
                    </Col>
                    <Col md={{pull : 11, span : 13}} sm={24} xs={24} className={"carousel-section"}>
                        <div className={`section-heading`}>
                            <div>
                                <h1 className={"title"}>British Short Hair & Scottish Fold</h1>
                                <p>Cattery and Import Cat Rusia Ukraine China</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default React.memo(Banner);