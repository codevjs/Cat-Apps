import React from "react";
import {Spin} from "antd";
import "assets/styles/loader.less";

interface Props {
    tip: string,
    spinning: boolean
}

const Spinner: React.FC<Props> = ({spinning, }) => {
    return (
        <div className={"spinner-container"}>
            <Spin
                indicator={
                    <div className={"spinner-container"}>
                        <img width={300} src={"/images/loader.gif"} alt={""} />
                    </div>
                }
                className={"spin"}
                size={"large"}
                spinning={spinning}
                tip={""}
            />
        </div>
    )
};

export default Spinner;