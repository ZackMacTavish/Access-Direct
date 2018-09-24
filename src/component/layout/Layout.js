import React from "react";
import '../../scss/layout/layout.scss';
import Header from "./Header";
import Navigation from "../Navigation";
import EditWrapper from "./EditWrapper";
import ProductOrderWrapper from "./ProductOrderWrapper";
import ProductOrderContainer from "../../containers/ProductOrderContainer";
import EditContainer from "../../containers/EditContainer";

class Layout extends React.Component {
    render() {
        return (
            <div className="layout-wrapper">
                <div className="top">
                    <Header/>
                    <Navigation/>
                </div>
                <div className="middle">
                    <EditContainer/>
                    <ProductOrderContainer/>
                </div>
                <div className="bottom">
                    {/*<Footer/>*/}
                </div>
            </div>
        )
    }
}

export default Layout;