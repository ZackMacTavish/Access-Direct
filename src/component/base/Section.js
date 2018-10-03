import React from "react";

class Section extends React.Component{
    render(){
        var classes = this.props.classes;
        if(this.props.visible === false){
            classes += ' hidden';
        }

        return (
            <div className = {classes}>
                {this.props.children}
            </div>
        )
    }
}

export default Section;