import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import '../../scss/base/show-id-picker.scss';

class ShowIdPicker extends React.Component {
    render() {
        return (
            <div className="show-id-picker">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.facilityCodeDisplay}
                            onChange={this.props.handleFieldChange('facilityCodeDisplay')}
                            color="primary"
                        />
                    }
                    label="Display Facility Code"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.formatDisplay}
                            onChange={this.props.handleFieldChange('formatDisplay')}
                            color="primary"
                            label="Test"
                        />
                    }
                    label="Display Format"
                />
            </div>
        )
    }
}

export default ShowIdPicker;