import {DISPLAY_EDIT_PAGE, DISPLAY_ORDER_PAGE} from "../../const/actions";

const initialState = {
    edit: true,
    order: false,
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
            }
        }

        case DISPLAY_ORDER_PAGE: {
            console.log('REDUCER_DISPLAY_ORDER_PAGE');
            return {
                ...state,
                edit: false,
                order: true,
            }
        }
    }

    return state;
};

export default pageReducer;