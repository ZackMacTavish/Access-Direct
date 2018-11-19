import React from "react";

class Section extends React.Component{
    render(){
        let {visible, classes} = this.props;

        if(visible === false){
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