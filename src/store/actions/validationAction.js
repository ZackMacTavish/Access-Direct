import {VALIDATE, VALIDATE_FORM} from "../../const/actions";
import rules from "../../validation/rules";
import FormValidation from "../../validation/FormValidation";


export const validateField = (field, value) => {
    console.log('Test 2');
    const fieldRules = rules.filter((rule) => rule.field === field);
    console.log('Test 3');
    console.log(fieldRules);

    const validate = new FormValidation(fieldRules);
    const validatedOrder = validate.validate({[field]: value});


    return {
        type: VALIDATE,
        result: validatedOrder,
    }
};

export const validateForm = (state) => {
    console.log('VALIDATED_ORDER');
    const validate = new FormValidation(rules);
    const validatedOrder = validate.validate(state);

    console.log(validatedOrder);
    return {
        type: VALIDATE_FORM,
        result: validatedOrder,
    }
};


