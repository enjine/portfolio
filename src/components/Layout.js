import React from "react";
import Header from "../components/Header";
import BackgroundLines from "../components/BackgroundLines";

 const Layout = props => (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header />
      {props.children}
    </div>
  );

export default Layout;
