import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import '../../scss/base/show-id-picker.scss';

const FacilityCodeDisplayButton = (props) => (
    <div className="show-id-picker">
        <FormControlLabel
            control={
                <Checkbox
                    checked={props.formatDisplay}
                    onChange={props.setFormat}
                    color="primary"
                    label="Test"
                />
            }
            label="Display Facility code and Format"
        />
    </div>
);

export default FacilityCodeDisplayButton;