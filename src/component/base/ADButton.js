import React from "react";
import '../../scss/base/ad-button.scss';


class ADButton extends React.Component {
    render(){
        const {title, onClick} = this.props;

        return (
            <div className="ad-button-wrapper" onClick={() => onClick()}>
                {title}
            </div>
        )
    }
}

export default ADButton;