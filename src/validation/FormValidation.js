
    /**
     * @param value Represent value of filed that will be checked
     * @param rules Accept array of rule object
     * Rule object example
     *  {
     *      message: ''         --- Validation message to show if validation fail
     *      validate: func()  --- Function that will be called to validate field
     *  }
     *
     *  @return object
     *  {
     *     isValid: true/false  --- Represents if field is valid
     *     message: ''          --- Validation message to show if validation fail
     *  }
     */
    export const validateField = (value, rules=[]) => {
        let response = {
            isValid: true,
            message: '',
        };

        rules.forEach(rule => {
          const isValid = rule.validate(value);
          if(!isValid){
              response.isValid = false;
              response.message = rule.message;
          }
        });

        return response;
    };

    // constructor(rules){
    //
    //     this.rules = rules;
    // }
    //
    // validate(state){
    //    console.log('Test 4');
    //    var validation = {isValid: true};
    //    this.rules.forEach((rule) => {
    //        console.log('Test 5');
    //        // console.log(validation[rule.field]);
    //        // console.log(validation[rule.field].isValid);
    //
    //       if(validation[rule.field] === undefined || validation[rule.field].isValid === true){
    //           console.log('Test 6');
    //           var isValidField = rule.isValid(state[rule.field]);
    //           validation = {
    //               ...validation,
    //               [rule.field]: {
    //                   isValid: isValidField,
    //                   message: rule.message,
    //               }
    //           };
    //           if(!isValidField){
    //               validation.isValid = false;
    //           }
    //
    //           console.log(validation);
    //       }
    //     });
    //     console.log(validation);
    //     return validation;
    // }



