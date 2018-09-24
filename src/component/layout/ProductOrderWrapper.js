import React from "react";
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import '../../scss/layout/order-wrapper.scss';
import Button from "@material-ui/core/es/Button/Button";
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/es/Radio/Radio";
import FormLabel from "@material-ui/core/es/FormLabel/FormLabel";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import {lang} from "../../i18/en/lang";

class ProductOrderWrapper extends React.Component {
    render() {
        var className = 'order-wrapper';
        if(!this.props.visible){
            className += ' hidden';
        }

        return (
            <div className={className}>
                <form>
                    <div className="company-info">
                        <FormLabel component="legend">Company information</FormLabel>
                        <div className="fields">
                            <div className="section">
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Your name"
                                    margin="normal"
                                    name="name"
                                    // value={this.props.object.name}
                                    // onChange = {this.props.handleChange('name')

                                />
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Name of Business"
                                    margin="normal"
                                    name="nameOfBusiness"
                                />
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Address"
                                    margin="normal"
                                    name="address"
                                />
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="City"
                                    margin="normal"
                                    name="city"
                                />
                            </div>
                            <div className="section">
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="State"
                                    margin="normal"
                                    name="state"
                                />
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Zip Code"
                                    margin="normal"
                                    name="zipCode"
                                />
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Phone Number"
                                    margin="normal"
                                    name="phoneNumber"
                                />
                                <TextField
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Email Address"
                                    margin="normal"
                                    name="emailAddress"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="formatting">
                            <FormLabel component="legend">Select the formatting</FormLabel>
                            <RadioGroup
                                aria-label="Gender"
                                name="gender1" className = "radio-group">
                               <div className = "radio-section">
                                   <FormControlLabel value="1" control={<Radio/>} label={lang.en.form_order.radio_buttons.b1}/>
                                   <FormControlLabel value="2" control={<Radio/>} label={lang.en.form_order.radio_buttons.b2}/>
                                   <FormControlLabel value="3" control={<Radio/>} label={lang.en.form_order.radio_buttons.b3}/>
                                   <FormControlLabel value="4" control={<Radio/>} label={lang.en.form_order.radio_buttons.b4}/>
                                   <FormControlLabel value="5" control={<Radio/>} label={lang.en.form_order.radio_buttons.b5}/>
                               </div>
                                <div className = "radio-section">
                                    <FormControlLabel value="6" control={<Radio/>} label={lang.en.form_order.radio_buttons.b6}/>
                                    <FormControlLabel value="7" control={<Radio/>} label={lang.en.form_order.radio_buttons.b7}/>
                                    <FormControlLabel value="8" control={<Radio/>} label={lang.en.form_order.radio_buttons.b8}/>
                                    <FormControlLabel value="9" control={<Radio/>} label={lang.en.form_order.radio_buttons.b9}/>
                                    <FormControlLabel value="10" control={<Radio/>} label={lang.en.form_order.radio_buttons.b10}/>
                                </div>
                            </RadioGroup>
                    </div>

                    <div className="note">
                       <FormLabel component="legend">Programming Information</FormLabel>
                       <div className="fields">
                           <TextField
                               className="text-field"
                               id="standard-uncontrolled"
                               label="Facility Code"
                               margin="normal"
                               name="facilityCode"
                           />
                           <TextField
                               className="text-field"
                               id="standard-uncontrolled"
                               label="Starting Number"
                               margin="normal"
                               name="startingNumber"
                           />
                           <TextField
                               className="text-field"
                               id="standard-uncontrolled"
                               label="Quantity"
                               margin="normal"
                               name="quantity"
                           />
                       </div>
                    </div>

                    <div className="bottom">
                        <Button onClick={this.props.displayEditPage} size="medium" color="primary" variant="outlined">Back</Button>
                        <Button size="medium" color="primary" variant="outlined">Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProductOrderWrapper;