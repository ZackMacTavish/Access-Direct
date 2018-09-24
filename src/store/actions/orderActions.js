import {FIELD_CHANGE} from "../../const/actions";

export const fieldChange = (name, value) =>{
  return{
      type: FIELD_CHANGE,
      name: name,
      value: value,
  }
};