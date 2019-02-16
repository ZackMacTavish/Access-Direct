import React from "react";
import TextField from '@material-ui/core/TextField';
import '../../scss/layout/order-wrapper.scss';
import Button from "@material-ui/core/Button/Button";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import Section from "./Section";
import * as Formatting from "../../const/formating";


const OrderForm = (props) => {
    return (
        <div className="order-wrapper">
            <form>
                <div className="company-info">
                    <FormLabel component="legend">Company information</FormLabel>
                    <div className="fields">
                        <div className="section">
                            <TextField
                                error={!props.object.name.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Your name"
                                helperText={props.object.name.isValid ? '' : props.object.name.message}
                                margin="normal"
                                name="name"
                                value={props.object.name.value}
                                onChange={(e) => props.handleChange('name', e.target.value)}
                                onBlur={(e) => props.validateField('name', e.target.value)}
                            />
                            <TextField
                                error={!props.object.nameOfBusiness.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Name of Business"
                                helperText={props.object.nameOfBusiness.isValid ? '' : props.object.nameOfBusiness.message}
                                margin="normal"
                                name="nameOfBusiness"
                                value={props.object.nameOfBusiness.value}
                                onChange={(e) => props.handleChange('nameOfBusiness', e.target.value)}
                                onBlur={(e) => props.validateField('nameOfBusiness', e.target.value)}
                            />
                            <TextField
                                error={!props.object.address.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Address"
                                helperText={props.object.address.isValid ? '' : props.object.address.message}
                                margin="normal"
                                name="address"
                                value={props.object.address.value}
                                onChange={(e) => props.handleChange('address', e.target.value)}
                                onBlur={(e) => props.validateField('address', e.target.value)}
                            />
                            <TextField
                                error={!props.object.city.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="City"
                                helperText={props.object.city.isValid ? '' : props.object.city.message}
                                margin="normal"
                                name="city"
                                value={props.object.city.value}
                                onChange={(e) => props.handleChange('city', e.target.value)}
                                onBlur={(e) => props.validateField('city', e.target.value)}
                            />
                        </div>
                        <div className="section">
                            <TextField
                                error={!props.object.state.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="State"
                                helperText={props.object.state.isValid ? '' : props.object.state.message}
                                margin="normal"
                                name="state"
                                value={props.object.state.value}
                                onChange={(e) => props.handleChange('state', e.target.value)}
                                onBlur={(e) => props.validateField('state', e.target.value)}
                            />
                            <TextField
                                error={!props.object.zipCode.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Zip Code"
                                helperText={props.object.zipCode.isValid ? '' : props.object.zipCode.message}
                                margin="normal"
                                name="zipCode"
                                value={props.object.zipCode.value}
                                onChange={(e) => props.handleChange('zipCode', e.target.value)}
                                onBlur={(e) => props.validateField('zipCode', e.target.value)}
                            />
                            <TextField
                                error={!props.object.phoneNumber.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Phone Number"
                                helperText={props.object.phoneNumber.isValid ? '' : props.object.phoneNumber.message}
                                margin="normal"
                                name="phoneNumber"
                                value={props.object.phoneNumber.value}
                                onChange={(e) => props.handleChange('phoneNumber', e.target.value)}
                                onBlur={(e) => props.validateField('phoneNumber', e.target.value)}
                            />
                            <TextField
                                error={!props.object.emailAddress.isValid}
                                className="text-field"
                                id="standard-uncontrolled"
                                label="Email Address"
                                helperText={props.object.emailAddress.isValid ? '' : props.object.emailAddress.message}
                                margin="normal"
                                name="emailAddress"
                                value={props.object.emailAddress.value}
                                onChange={(e) => props.handleChange('emailAddress', e.target.value)}
                                onBlur={(e) => props.validateField('emailAddress', e.target.value)}
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
                        value={props.object.formatting.value}
                        onChange={(e) => props.handleChange('formatting', e.target.value)}>
                        <FormControlLabel value={Formatting.FORMATTING_1} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_1}/>
                        <FormControlLabel value={Formatting.FORMATTING_2} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_2}/>
                        <FormControlLabel value={Formatting.FORMATTING_3} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_3}/>
                        <FormControlLabel value={Formatting.FORMATTING_4} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_4}/>
                        <FormControlLabel value={Formatting.FORMATTING_5} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_5}/>
                        <FormControlLabel value={Formatting.FORMATTING_6} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_6}/>
                        <FormControlLabel value={Formatting.FORMATTING_7} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_7}/>
                        <FormControlLabel value={Formatting.FORMATTING_8} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_8}/>
                        <FormControlLabel value={Formatting.FORMATTING_9} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_9}/>
                        <FormControlLabel value={Formatting.FORMATTING_10} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_10}/>
                        <FormControlLabel value={Formatting.FORMATTING_11} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_11}/>
                        <FormControlLabel value={Formatting.FORMATTING_12} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_12}/>
                        <FormControlLabel value={Formatting.FORMATTING_13} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_13}/>
                        <FormControlLabel value={Formatting.FORMATTING_14} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_14}/>
                        <FormControlLabel value={Formatting.FORMATTING_15} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_15}/>
                        <FormControlLabel value={Formatting.FORMATTING_16} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_16}/>
                        <FormControlLabel value={Formatting.FORMATTING_17} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_17}/>
                        <FormControlLabel value={Formatting.FORMATTING_18} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_18}/>
                        <FormControlLabel value={Formatting.FORMATTING_19} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_19}/>
                        <FormControlLabel value={Formatting.FORMATTING_20} control={<Radio/>} className="radio-button"
                                          label={Formatting.FORMATTING_LABEL_20}/>
                    </RadioGroup>
                    <Section visible={!props.object.formatting.isValid}><FormLabel error
                                                                                   component="legend">{props.object.formatting.message}</FormLabel></Section>
                </div>

                <div className="note">
                    <FormLabel component="legend">Programming Information</FormLabel>
                    <div className="fields">
                        <TextField
                            error={!props.object.facilityCode.isValid}
                            className="text-field"
                            id="standard-uncontrolled"
                            label="Facility Code"
                            helperText={props.object.facilityCode.isValid ? '' : props.object.facilityCode.message}
                            margin="normal"
                            name="facilityCode"
                            value={props.object.facilityCode.value}
                            onChange={(e) => props.handleChange('facilityCode', e.target.value)}
                            onBlur={(e) => props.validateField('facilityCode', e.target.value)}
                        />
                        <TextField
                            error={!props.object.startingNumber.isValid}
                            className="text-field"
                            id="standard-uncontrolled"
                            label="Starting Number"
                            helperText={props.object.startingNumber.isValid ? '' : props.object.startingNumber.message}
                            margin="normal"
                            name="startingNumber"
                            value={props.object.startingNumber.value}
                            onChange={(e) => props.handleChange('startingNumber', e.target.value)}
                            onBlur={(e) => props.validateField('startingNumber', e.target.value)}
                        />
                        <TextField
                            error={!props.object.quantity.isValid}
                            className="text-field"
                            id="standard-uncontrolled"
                            label="Quantity"
                            helperText={props.object.quantity.isValid ? '' : props.object.quantity.message}
                            margin="normal"
                            name="quantity"
                            value={props.object.quantity.value}
                            onChange={(e) => props.handleChange('quantity', e.target.value)}
                            onBlur={(e) => props.validateField('quantity', e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <TextField
                        className="text-field"
                        id="standard-uncontrolled"
                        label="Optional: Other information to include in the custom printing (business name, website, phone number)"
                        fullWidth
                        multiline
                        rows="2"
                        margin="normal"
                        name="additionalPrintProperty"
                        value={props.object.additionalPrintProperty.value}
                        onChange={(e) => props.handleChange('additionalPrintProperty', e.target.value)}
                        onBlur={(e) => props.validateField('additionalPrintProperty', e.target.value)}
                    />
                    <TextField
                        className="text-field"
                        id="standard-uncontrolled"
                        label="Optional: Any additional questions/information about the order"
                        fullWidth
                        multiline
                        rows="2"
                        margin="normal"
                        name="additionalInfo"
                        value={props.object.additionalInfo.value}
                        onChange={(e) => props.handleChange('additionalInfo', e.target.value)}
                        onBlur={(e) => props.validateField('additionalInfo', e.target.value)}
                    />
                </div>

                <div className="bottom">
                    <Button onClick={props.displayEditPage} size="medium" color="primary"
                            variant="outlined">Back</Button>
                    <Button onClick={() => props.submitOrder()} size="medium" color="primary"
                            variant="outlined">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;