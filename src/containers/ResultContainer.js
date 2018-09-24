import React from 'react';
import {connect} from 'react-redux';
import FoboResult from "../component/FoboResult";
import {initBase, initLogo, setLogoPosition, setLogoProperties} from "../store/actions/editActions";


class ResultContainer extends React.Component{

    render(){
        return (
            <FoboResult userLogoImg = {this.props.userLogoImg}
                        width = {this.props.width}
                        baseImg = {this.props.baseImg}
                        x = {this.props.x}
                        y = {this.props.y}
                        setLogoPosition = {this.props.setLogoPosition}
                        initBase = {this.props.initBase}
                        initLogo = {this.props.initLogo}
                        rotate = {this.props.rotation}/>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userLogoImg: state.edit.userLogoImg,
        width: state.edit.userLogoWidth,
        baseImg: state.edit.baseImg,
        x: state.edit.userLogoX,
        y: state.edit.userLogoY,
        rotation: state.edit.rotation,
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