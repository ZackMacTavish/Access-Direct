import React from "react";

const Section = (props) => {
        let {visible, classes} = props;

        if(visible === false){
            classes += ' hidden';
        }

        return (
            <div className = {classes}>
                {props.children}
            </div>
        )
};

export default Section;