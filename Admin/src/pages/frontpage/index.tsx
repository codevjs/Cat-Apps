import React from "react";
import Component from "components";
import Banner from "./banner";
const FrontpageComponent : React.FC = () => {

    return (
        <Component.Layout>
            <section className={"main-frontpage"}>
                <Banner/>
            </section>
        </Component.Layout>
    )
}

export default FrontpageComponent;