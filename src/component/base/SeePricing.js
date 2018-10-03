import React from "react";
import '../../scss/base/see-pricing.scss';
import {lang} from "../../i18/en/lang";

class SeePricing extends React.Component {
    render() {
        return (
            <div className="see-pricing">
                <div className="click" onClick={this.props.proceedToOrder}>
                    {lang.en.edit.next_step}
                </div>
            </div>
        )
    }
}

export default SeePricing;