import validator from 'validator';
import {isGreaterThan} from "./validations";

const rules = [
    {
        field: 'name',
        message: 'Name is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'nameOfBusiness',
        message: 'Name of business is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'address',
        message: 'Adress is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'city',
        message: 'City is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'state',
        message: 'State is required',
        isValid: (value) => !validator.isEmpty(value),

    },
    {
        field: 'zipCode',
        message: 'Zip code is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'phoneNumber',
        message: 'Phone number is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'emailAddress',
        message: 'Email adress is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'emailAddress',
        message: 'Email is not well formatted',
        isValid: (value) => validator.isEmail(value),
    },
    {
        field: 'formatting',
        message: 'You need to select format type',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'facilityCode',
        message: 'Facility code is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'startingNumber',
        message: 'Starting number is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'quantity',
        message: 'Quantity is required',
        isValid: (value) => !validator.isEmpty(value),
    },
    {
        field: 'quantity',
        message: 'Minimum 25',
        isValid: (value) => isGreaterThan(value, 24),
    },
];

export default rules;