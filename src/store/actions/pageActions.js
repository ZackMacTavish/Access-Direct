import {DISPLAY_DIALOG, DISPLAY_EDIT_PAGE, DISPLAY_ORDER_PAGE, TOGGLE_ADD_TEXT_DISPLAY} from "../../const/actions";

export const displayEditPage = () => {
  return {
      type: DISPLAY_EDIT_PAGE,
  }
};

export const displayOrderPage = () => {
    return {
        type: DISPLAY_ORDER_PAGE,
    }
};

export const displayDialog = (dialog) => {
   return {
       type: DISPLAY_DIALOG,
       dialog: dialog,
   }
};

export const toggleAddTextDisplay = () => {
    return {
        type: TOGGLE_ADD_TEXT_DISPLAY
    }
};