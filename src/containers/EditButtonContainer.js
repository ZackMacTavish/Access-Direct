import React from "react";
import EditButton from "../component/EditButton";
import {CENTER_LOGO, REDO, ROTATE_LEFT, ROTATE_RIGHT, TOGGLE_SLIDE, UNDO} from "../const/actions";
import {centerLogo, redo, rotateLeft, rotateRight, toggleSlide, undo} from "../store/actions/editActions";
import {connect} from 'react-redux';

class EditButtonContainer extends React.Component {
    render() {
        return (
            <EditButton action={this.props.action}
                        editLogo={this.props.editLogo}
                        img={this.props.img}
                        text={this.props.text}/>
        )
    }
}

const mapDispatcherToProps = (dispatch) => {
    return {
        editLogo: (action) => {
            switch (action) {
                case CENTER_LOGO: {
                    dispatch(centerLogo());
                    break;
                }

                case ROTATE_LEFT: {
                    dispatch(rotateLeft());
                    break;
                }

                case ROTATE_RIGHT: {
                    dispatch(rotateRight());
                    break;
                }

                case TOGGLE_SLIDE: {
                    dispatch(toggleSlide());
                    break;
                }

                case UNDO: {
                    dispatch(undo());
                    break;
                }

                case REDO: {
                    dispatch(redo());
                    break;
                }
            }
        }
    }
};

export default connect(null, mapDispatcherToProps)(EditButtonContainer);