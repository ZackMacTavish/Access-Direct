import {isEmpty, isGreaterThan} from "./validations";
import validator from "validator";

const rules = {
    name: [
        {
            message: 'Name is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    nameOfBusiness: [
        {
            message: 'Name of business is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    address: [
        {
            message: 'Adress is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    city: [
        {
            message: 'City is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    state: [
        {
            message: 'State is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    zipCode: [
        {
            message: 'Zip code is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    phoneNumber: [
        {
            message: 'Phone number is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    emailAddress: [
        {
            message: 'Email is not well formatted',
            validate: (value) => validator.isEmail(value),
        },
        {
            message: 'Email adress is required',
            validate: (value) => !validator.isEmpty(value),
        },
    ],
    formatting: [
        {
            message: 'You need to select format type',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    facilityCode: [
        {
            message: 'Facility code is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    startingNumber: [
        {
            message: 'Starting number is required',
            validate: (value) => !validator.isEmpty(value),
        }
    ],
    quantity: [
        {
            message: 'Quantity is required',
            validate: (value) => !validator.isEmpty(value),
        },
        {
            message: 'Minimum 25',
            validate: (value) => isGreaterThan(value, 24),
        }
    ]
};

export default rules;