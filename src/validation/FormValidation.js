import rules from "./rules";

class FormValidation{
    constructor(rules){

        this.rules = rules;
    }

    validate(state){
       console.log('Test 4');
       var validation = {isValid: true};
       this.rules.forEach((rule) => {
           console.log('Test 5');
           // console.log(validation[rule.field]);
           // console.log(validation[rule.field].isValid);

          if(validation[rule.field] === undefined || validation[rule.field].isValid === true){
              console.log('Test 6');
              var isValidField = rule.isValid(state[rule.field]);
              validation = {
                  ...validation,
                  [rule.field]: {
                      isValid: isValidField,
                      message: rule.message,
                  }
              };
              if(!isValidField){
                  validation.isValid = false;
              }

              console.log(validation);
          }
        });
        console.log(validation);
        return validation;
    }
}

export default FormValidation;
