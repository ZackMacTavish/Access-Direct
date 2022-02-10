import React from 'react';
import '../../scss/base/edit-button.scss';

class EditToolButton extends React.Component{
    render(){
        return(
            <div className="edit-button-wrapper" onClick={() => this.props.action()}>
                <img alt="A button to edit the logo on the fob" src={this.props.img}/>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default EditToolButton;