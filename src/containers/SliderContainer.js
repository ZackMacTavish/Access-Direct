import React from 'react';
import Slider from '@material-ui/lab/Slider';
import {connect} from 'react-redux';
import {saveState, zoomLogo} from "../store/actions/editActions";


class SliderContainer extends React.Component{
    render(){
        return (
               <Slider min={0.2} max={2}
                       value={this.props.value}
                       onChange={this.props.zoom}
                       hidden={this.props.visible}
                       onDragEnd={this.props.saveState}/>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      value: state.edit.zoomRates,
      visible: state.edit.slideVisibility,
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        zoom: (event, value) => dispatch(zoomLogo(value)),
        saveState: () => dispatch(saveState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);