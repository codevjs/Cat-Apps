import React from "react";
import {Divider} from "antd";

const Dividers : React.FC = () => {

    return (
        <div className={"public-container"}>
            <div className={"divider-section"}>
                <Divider />
            </div>
        </div>
    )
}

export default React.memo(Dividers)