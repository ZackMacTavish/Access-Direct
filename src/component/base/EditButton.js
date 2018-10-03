import React from 'react';
import '../../scss/base/edit-button.scss';

class EditButton extends React.Component{
    render(){
        return(
            <div className="edit-button-wrapper" onClick={()=> this.props.editLogo(this.props.action)}>
                <img src={this.props.img}/>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default EditButton;