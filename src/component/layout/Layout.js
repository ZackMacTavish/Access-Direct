import React from "react";
import '../../scss/layout/layout.scss';
import Header from "../base/Header";
import OrderContainer from "../containers/OrderContainer";
import EditContainer from "../containers/EditContainer";
import ConfirmDialogContainer from "../containers/ConfirmDialogContainer";
import {lang} from "../../i18/en/lang";

class Layout extends React.Component {
    render() {
        return (
            <div className="layout-wrapper">
                <div className="top">
                    <Header/>
                </div>
                <div className="middle">
                    <EditContainer/>
                    <OrderContainer/>
                </div>
                <div className="bottom">
                    {/*<Footer/>*/}
                </div>
                <div>
                    {/*<ConfirmDialogContainer title={lang.en.dialog.is_design_finished_title}/>*/}
                </div>
                {/*<FoboColorPickerContainer/>*/}
            </div>
        )
    }
}

export default Layout;