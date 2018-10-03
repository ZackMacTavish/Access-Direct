import React from 'react';
import {connect} from 'react-redux';
import FoboResult from "../base/FoboResult";
import {initBase, initLogo, setLogoPosition, setLogoProperties} from "../../store/actions/editActions";


class ResultContainer extends React.Component{

    render(){
        return (
            <FoboResult {...this.props}/>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userLogoImg: state.edit.userLogoImg,
        width: state.edit.userLogoWidth,
        baseImg: state.edit.baseImg,
        baseCoverImg: state.edit.baseCoverImg,
        x: state.edit.userLogoX,
        y: state.edit.userLogoY,
        rotation: state.edit.rotation,
        facilityCodeDisplay: state.order.productOrder.facilityCodeDisplay,
        formatDisplay: state.order.productOrder.formatDisplay,
        addTextValue: state.edit.addTextValue,
    }
};

const mapDispatcherToProps = (dispatch) => {
    return {
        setLogoPosition: (x, y)=> dispatch(setLogoPosition(x, y)),
        initBase: (width, height) => dispatch(initBase(width, height)),
        initLogo: (width, height) => dispatch(initLogo(width, height)),
    }
};

export default connect(mapStateToProps, mapDispatcherToProps)(ResultContainer);