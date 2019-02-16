import React from "react";
import '../../scss/layout/layout.scss';
import Header from "../base/Header";
import OrderContainer from "../containers/OrderContainer";
import EditContainer from "../containers/EditContainer";
import FobTemplatePicker from "../containers/FobTemplatePicker";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                    <FobTemplatePicker/>
                </div>
                <div className="middle">
                    <EditContainer/>
                    <OrderContainer/>
                </div>

                <div>
                    {/*<ConfirmDialogContainer title={lang.en.dialog.is_design_finished_title}/>*/}
                </div>
            </div>
        )
    }
}

export default Layout;
