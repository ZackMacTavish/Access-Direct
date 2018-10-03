import {DISPLAY_DIALOG, DISPLAY_EDIT_PAGE, DISPLAY_ORDER_PAGE, TOGGLE_ADD_TEXT_DISPLAY} from "../../const/actions";
import {PROCEED_TO_ORDER_DIALOG_CLOSE, PROCEED_TO_ORDER_DIALOG_OPEN} from "../../const/dialogs";

const initialState = {
    edit: true,
    order: false,
    proceedToOrderDialog: false,
    addText: false,
};

const pageReducer = (state = initialState, action) => {
    console.log('Page reducer recived: ', action.type);
    switch (action.type) {
        case DISPLAY_EDIT_PAGE: {
            console.log('REDUCER_DISPLAY_EDIT_PAGE');
            return {
                ...state,
                edit: true,
                order: false,
                proceedToOrderDialog: false,
            }
        }

        case DISPLAY_ORDER_PAGE: {
            console.log('REDUCER_DISPLAY_ORDER_PAGE');
            return {
                ...state,
                edit: false,
                order: true,
                proceedToOrderDialog: false,
            }
        }

        case DISPLAY_DIALOG: {
            switch(action.dialog){
                case PROCEED_TO_ORDER_DIALOG_OPEN: {
                    return {
                        ...state,
                        proceedToOrderDialog: true,
                    }
                }

                case PROCEED_TO_ORDER_DIALOG_CLOSE: {
                    return {
                        ...state,
                        proceedToOrderDialog: false,
                    }
                }
            }
        }

        case TOGGLE_ADD_TEXT_DISPLAY: {
            return {
                ...state,
                addText: !state.addText,
            }
        }
    }

    return state;
};

export default pageReducer;