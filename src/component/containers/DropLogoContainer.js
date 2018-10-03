import React from 'react';
import {connect} from 'react-redux';
import DropLogoSection from "../base/DropLogoSection";
import {uploadLogo} from "../../store/actions/editActions";

class DropLogoContainer extends React.Component{
    render(){
        return(
           <DropLogoSection uploadLogo = {this.props.uploadLogo}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadLogo: (img) => {dispatch(uploadLogo(img))}
    }
};

export default connect(null, mapDispatchToProps)(DropLogoContainer);