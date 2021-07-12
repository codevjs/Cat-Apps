import React from "react";
import Component from "components";
import "assets/styles/home.less";

import Banner from "./banner";
import Gallery from "./gallery";

const Home : React.FC = () => {

    return (
       <Component.Publiclayout>
           <section className={"home-wrapper"}>
               <Banner />
               <Gallery />
           </section>
       </Component.Publiclayout>
    )
}

export default Home;