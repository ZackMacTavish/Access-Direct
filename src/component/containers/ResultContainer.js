import React from 'react';
import {connect} from 'react-redux';
import FoboResult from "../base/FoboResult";
import {initBase, initLogo, setLogoPosition} from "../../store/actions/editActions";


class ResultContainer extends React.Component{

    render(){
        return (
            <FoboResult {...this.props}/>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userLogoImgUrl: state.edit.userLogoImgUrl,
        buildLogoProperties: state.edit.buildLogoProperties,
        productOrder: state.order.productOrder,
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