import React from "react";
import TextField from '@material-ui/core/TextField';

import '../../scss/layout/order-wrapper.scss';
import Button from "@material-ui/core/es/Button/Button";
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/es/Radio/Radio";
import FormLabel from "@material-ui/core/es/FormLabel/FormLabel";
import {lang} from "../../i18/en/lang";
import Section from "./Section";

class OrderForm extends React.Component {
    render() {
        return (
            <div className="order-wrapper">
                <form onSubmit={this.props.submitOrder(this.props.object)}>
                    <div className="company-info">
                        <FormLabel component="legend">Company information</FormLabel>
                        <div className="fields">
                            <div className="section">
                                <TextField
                                    error={!this.props.validatedOrder.name.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Your name"
                                    helperText={this.props.validatedOrder.name.isValid ? '': this.props.validatedOrder.name.message}
                                    margin="normal"
                                    name="name"
                                    value={this.props.object.name}
                                    onChange={this.props.handleChange('name')}
                                    onBlur = {this.props.validateField('name')}
                                />
                                <TextField
                                    error={!this.props.validatedOrder.nameOfBusiness.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Name of Business"
                                    helperText={this.props.validatedOrder.nameOfBusiness.isValid ? '': this.props.validatedOrder.nameOfBusiness.message}
                                    margin="normal"
                                    name="nameOfBusiness"
                                    value={this.props.object.nameOfBusiness}
                                    onBlur = {this.props.validateField('nameOfBusiness')}
                                    onChange={this.props.handleChange('nameOfBusiness')}
                                />
                                <TextField
                                    error={!this.props.validatedOrder.address.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Address"
                                    helperText={this.props.validatedOrder.address.isValid ? '': this.props.validatedOrder.address.message}
                                    margin="normal"
                                    name="address"
                                    value={this.props.object.address}
                                    onBlur = {this.props.validateField('address')}
                                    onChange={this.props.handleChange('address')}
                                />
                                <TextField
                                    error={!this.props.validatedOrder.city.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="City"
                                    helperText={this.props.validatedOrder.city.isValid ? '': this.props.validatedOrder.city.message}
                                    margin="normal"
                                    name="city"
                                    value={this.props.object.city}
                                    onBlur = {this.props.validateField('city')}
                                    onChange={this.props.handleChange('city')}
                                />
                            </div>
                            <div className="section">
                                <TextField
                                    error={!this.props.validatedOrder.state.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="State"
                                    helperText={this.props.validatedOrder.state.isValid ? '': this.props.validatedOrder.state.message}
                                    margin="normal"
                                    name="state"
                                    value={this.props.object.state}
                                    onBlur = {this.props.validateField('state')}
                                    onChange={this.props.handleChange('state')}
                                />
                                <TextField
                                    error={!this.props.validatedOrder.zipCode.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Zip Code"
                                    helperText={this.props.validatedOrder.zipCode.isValid ? '': this.props.validatedOrder.zipCode.message}
                                    margin="normal"
                                    name="zipCode"
                                    value={this.props.object.zipCode}
                                    onBlur = {this.props.validateField('zipCode')}
                                    onChange={this.props.handleChange('zipCode')}
                                />
                                <TextField
                                    error={!this.props.validatedOrder.phoneNumber.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Phone Number"
                                    helperText={this.props.validatedOrder.phoneNumber.isValid ? '': this.props.validatedOrder.phoneNumber.message}
                                    margin="normal"
                                    name="phoneNumber"
                                    value={this.props.object.phoneNumber}
                                    onBlur = {this.props.validateField('phoneNumber')}
                                    onChange={this.props.handleChange('phoneNumber')}
                                />
                                <TextField
                                    error={!this.props.validatedOrder.emailAddress.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Email Address"
                                    helperText={this.props.validatedOrder.emailAddress.isValid ? '': this.props.validatedOrder.emailAddress.message}
                                    margin="normal"
                                    name="emailAddress"
                                    value={this.props.object.emailAddress}
                                    onBlur = {this.props.validateField('emailAddress')}
                                    onChange={this.props.handleChange('emailAddress')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="formatting">
                        <FormLabel component="legend">Select the formatting</FormLabel>
                        <RadioGroup
                            aria-label="Gender"
                            name="formatting"
                            className="radio-group"
                            value={this.props.object.formatting}
                            onChange={this.props.handleChange('formatting')}>
                            <FormControlLabel value="1" control={<Radio/>} label={lang.en.form_order.radio_buttons.b1}/>
                            <FormControlLabel value="2" control={<Radio/>} label={lang.en.form_order.radio_buttons.b2}/>
                            <FormControlLabel value="3" control={<Radio/>} label={lang.en.form_order.radio_buttons.b3}/>
                            <FormControlLabel value="4" control={<Radio/>} label={lang.en.form_order.radio_buttons.b4}/>
                            <FormControlLabel value="5" control={<Radio/>} label={lang.en.form_order.radio_buttons.b5}/>
                            <FormControlLabel value="6" control={<Radio/>} label={lang.en.form_order.radio_buttons.b6}/>
                            <FormControlLabel value="7" control={<Radio/>} label={lang.en.form_order.radio_buttons.b7}/>
                            <FormControlLabel value="8" control={<Radio/>} label={lang.en.form_order.radio_buttons.b8}/>
                            <FormControlLabel value="9" control={<Radio/>} label={lang.en.form_order.radio_buttons.b9}/>
                            <FormControlLabel value="10" control={<Radio/>}
                                              label={lang.en.form_order.radio_buttons.b10}/>
                        </RadioGroup>
                        <Section visible={!this.props.validatedOrder.formatting.isValid}><FormLabel error component="legend">{this.props.validatedOrder.formatting.message}</FormLabel></Section>
                    </div>

                    <div className="note">
                        <FormLabel component="legend">Programming Information</FormLabel>
                        <div className="fields">
                            <TextField
                                error={!this.props.validatedOrder.facilityCode.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Facility Code"
                                helperText={this.props.validatedOrder.facilityCode.isValid ? '': this.props.validatedOrder.facilityCode.message}
                                margin="normal"
                                name="facilityCode"
                                value={this.props.object.facilityCode}
                                onBlur = {this.props.validateField('facilityCode')}
                                onChange={this.props.handleChange('facilityCode')}
                            />
                            <TextField
                                error={!this.props.validatedOrder.startingNumber.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Starting Number"
                                helperText={this.props.validatedOrder.startingNumber.isValid ? '': this.props.validatedOrder.startingNumber.message}
                                margin="normal"
                                name="startingNumber"
                                value={this.props.object.startingNumber}
                                onBlur = {this.props.validateField('startingNumber')}
                                onChange={this.props.handleChange('startingNumber')}
                            />
                            <TextField
                                error={!this.props.validatedOrder.quantity.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Quantity"
                                helperText={this.props.validatedOrder.quantity.isValid ? '': this.props.validatedOrder.quantity.message}
                                margin="normal"
                                name="quantity"
                                value={this.props.object.quantity}
                                onBlur = {this.props.validateField('quantity')}
                                onChange={this.props.handleChange('quantity')}
                            />
                        </div>
                    </div>

                    <div>
                        <TextField
                            className="text-field"
                            id="standard-uncontrolled"
                            label="Optional: Any additional questions/information about the order"
                            fullWidth
                            multiline
                            rows="4"
                            margin="normal"
                            name="additionalInfo"
                            value={this.props.object.additionalInfo}
                            onChange={this.props.handleChange('additionalInfo')}
                        />
                    </div>

                    <div className="bottom">
                        <Button onClick={this.props.displayEditPage} size="medium" color="primary"
                                variant="outlined">Back</Button>
                        <Button type="submit"  size="medium" color="primary"
                                variant="outlined">Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderForm;