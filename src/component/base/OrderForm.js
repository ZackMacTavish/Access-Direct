import React from "react";
import TextField from '@material-ui/core/TextField';
import '../../scss/layout/order-wrapper.scss';
import Button from "@material-ui/core/Button/Button";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import {lang} from "../../i18/en/lang";
import Section from "./Section";
import {
    FORMATTING_1, FORMATTING_10, FORMATTING_2, FORMATTING_3, FORMATTING_4, FORMATTING_5, FORMATTING_6,
    FORMATTING_7, FORMATTING_8, FORMATTING_9
} from "../../const/formating";

class OrderForm extends React.Component {
    render() {
        return (
            <div className="order-wrapper">
                <form>
                    <div className="company-info">
                        <FormLabel component="legend">Company information</FormLabel>
                        <div className="fields">
                            <div className="section">
                                <TextField
                                    error={!this.props.object.name.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Your name"
                                    helperText={this.props.object.name.isValid ? '': this.props.object.name.message}
                                    margin="normal"
                                    name="name"
                                    value={this.props.object.name.value}
                                    onChange={(e) => this.props.handleChange('name',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('name', e.target.value)}
                                />
                                <TextField
                                    error={!this.props.object.nameOfBusiness.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Name of Business"
                                    helperText={this.props.object.nameOfBusiness.isValid ? '': this.props.object.nameOfBusiness.message}
                                    margin="normal"
                                    name="nameOfBusiness"
                                    value={this.props.object.nameOfBusiness.value}
                                    onChange={(e) => this.props.handleChange('nameOfBusiness',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('nameOfBusiness', e.target.value)}
                                />
                                <TextField
                                    error={!this.props.object.address.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Address"
                                    helperText={this.props.object.address.isValid ? '': this.props.object.address.message}
                                    margin="normal"
                                    name="address"
                                    value={this.props.object.address.value}
                                    onChange={(e) => this.props.handleChange('address',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('address', e.target.value)}
                                />
                                <TextField
                                    error={!this.props.object.city.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="City"
                                    helperText={this.props.object.city.isValid ? '': this.props.object.city.message}
                                    margin="normal"
                                    name="city"
                                    value={this.props.object.city.value}
                                    onChange={(e) => this.props.handleChange('city',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('city', e.target.value)}
                                />
                            </div>
                            <div className="section">
                                <TextField
                                    error={!this.props.object.state.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="State"
                                    helperText={this.props.object.state.isValid ? '': this.props.object.state.message}
                                    margin="normal"
                                    name="state"
                                    value={this.props.object.state.value}
                                    onChange={(e) => this.props.handleChange('state',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('state', e.target.value)}
                                />
                                <TextField
                                    error={!this.props.object.zipCode.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Zip Code"
                                    helperText={this.props.object.zipCode.isValid ? '': this.props.object.zipCode.message}
                                    margin="normal"
                                    name="zipCode"
                                    value={this.props.object.zipCode.value}
                                    onChange={(e) => this.props.handleChange('zipCode',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('zipCode', e.target.value)}
                                />
                                <TextField
                                    error={!this.props.object.phoneNumber.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Phone Number"
                                    helperText={this.props.object.phoneNumber.isValid ? '': this.props.object.phoneNumber.message}
                                    margin="normal"
                                    name="phoneNumber"
                                    value={this.props.object.phoneNumber.value}
                                    onChange={(e) => this.props.handleChange('phoneNumber',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('phoneNumber', e.target.value)}
                                />
                                <TextField
                                    error={!this.props.object.emailAddress.isValid}
                                    className="text-field"
                                    id="standard-uncontrolled"
                                    label="Email Address"
                                    helperText={this.props.object.emailAddress.isValid ? '': this.props.object.emailAddress.message}
                                    margin="normal"
                                    name="emailAddress"
                                    value={this.props.object.emailAddress.value}
                                    onChange={(e) => this.props.handleChange('emailAddress',e.target.value)}
                                    onBlur = {(e)=> this.props.validateField('emailAddress', e.target.value)}
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
                            value={this.props.object.formatting.value}
                            onChange={(e) => this.props.handleChange('formatting',e.target.value)}>
                            <FormControlLabel value={FORMATTING_1} control={<Radio/>} label={lang.en.form_order.radio_buttons.b1}/>
                            <FormControlLabel value={FORMATTING_2} control={<Radio/>} label={lang.en.form_order.radio_buttons.b2}/>
                            <FormControlLabel value={FORMATTING_3} control={<Radio/>} label={lang.en.form_order.radio_buttons.b3}/>
                            <FormControlLabel value={FORMATTING_4} control={<Radio/>} label={lang.en.form_order.radio_buttons.b4}/>
                            <FormControlLabel value={FORMATTING_5} control={<Radio/>} label={lang.en.form_order.radio_buttons.b5}/>
                            <FormControlLabel value={FORMATTING_6} control={<Radio/>} label={lang.en.form_order.radio_buttons.b6}/>
                            <FormControlLabel value={FORMATTING_7} control={<Radio/>} label={lang.en.form_order.radio_buttons.b7}/>
                            <FormControlLabel value={FORMATTING_8} control={<Radio/>} label={lang.en.form_order.radio_buttons.b8}/>
                            <FormControlLabel value={FORMATTING_9} control={<Radio/>} label={lang.en.form_order.radio_buttons.b9}/>
                            <FormControlLabel value={FORMATTING_10} control={<Radio/>}
                                              label={lang.en.form_order.radio_buttons.b10}/>
                        </RadioGroup>
                        <Section visible={!this.props.object.formatting.isValid}><FormLabel error component="legend">{this.props.object.formatting.message}</FormLabel></Section>
                    </div>

                    <div className="note">
                        <FormLabel component="legend">Programming Information</FormLabel>
                        <div className="fields">
                            <TextField
                                error={!this.props.object.facilityCode.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Facility Code"
                                helperText={this.props.object.facilityCode.isValid ? '': this.props.object.facilityCode.message}
                                margin="normal"
                                name="facilityCode"
                                value={this.props.object.facilityCode.value}
                                onChange={(e) => this.props.handleChange('facilityCode',e.target.value)}
                                onBlur = {(e)=> this.props.validateField('facilityCode', e.target.value)}
                            />
                            <TextField
                                error={!this.props.object.startingNumber.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Starting Number"
                                helperText={this.props.object.startingNumber.isValid ? '': this.props.object.startingNumber.message}
                                margin="normal"
                                name="startingNumber"
                                value={this.props.object.startingNumber.value}
                                onChange={(e) => this.props.handleChange('startingNumber',e.target.value)}
                                onBlur = {(e)=> this.props.validateField('startingNumber', e.target.value)}
                            />
                            <TextField
                                error={!this.props.object.quantity.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Quantity"
                                helperText={this.props.object.quantity.isValid ? '': this.props.object.quantity.message}
                                margin="normal"
                                name="quantity"
                                value={this.props.object.quantity.value}
                                onChange={(e) => this.props.handleChange('quantity',e.target.value)}
                                onBlur = {(e)=> this.props.validateField('quantity', e.target.value)}
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
                            value={this.props.object.additionalInfo.value}
                            onChange={(e) => this.props.handleChange('additionalInfo',e.target.value)}
                            onBlur = {(e)=> this.props.validateField('additionalInfo', e.target.value)}
                        />
                    </div>

                    <div className="bottom">
                        <Button onClick={this.props.displayEditPage} size="medium" color="primary"
                                variant="outlined">Back</Button>
                        <Button onClick={() => this.props.submitOrder()}  size="medium" color="primary"
                                variant="outlined">Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderForm;