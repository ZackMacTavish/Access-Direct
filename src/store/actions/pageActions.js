import {DISPLAY_EDIT_PAGE, DISPLAY_ORDER_PAGE} from "../../const/actions";

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