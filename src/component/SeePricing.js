import React from "react";
import '../scss/see-pricing.scss';

class SeePricing extends React.Component {

    handleClick = (e) => {
        this.props.displayOrderPage();
    };

    render() {
        return (
            <div className="see-pricing">
                <div className="click" onClick={this.handleClick}>
                    Click here to see pricing and details
                </div>
            </div>
        )
    }
}

export default SeePricing;