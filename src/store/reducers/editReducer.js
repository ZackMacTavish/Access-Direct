import {
    CENTER_LOGO,
    HIDE_SLIDE,
    INIT_BASE,
    INIT_LOGO,
    REDO,
    ROTATE_LEFT,
    ROTATE_RIGHT,
    SAVE_STATE,
    SET_BASE_IMG,
    SET_LOGO_POSITION,
    SET_LOGO_PROPERTIES,
    TOGGLE_SLIDE,
    UNDO,
    UPLOAD_LOGO,
    ZOOM_LOGO
} from "../../const/actions";

import {getNextState, getPrevState, saveState} from './stateVersions';
import {BLACK_FOBO_IMG} from "../../const/images";

const initialState = {
    id: 0,
    baseImg: BLACK_FOBO_IMG,
    baseImgWidth: 0,
    baseImgHeight: 0,
    userLogoImg: null,
    userLogoImgInitialized: false,
    userLogoInitWidth: null,
    userLogoInitHeight: null,
    userLogoWidth: null,
    userLogoHeight: null,
    userLogoX: 0,
    userLogoY: 0,
    rotation: 0,
    zoomRates: 1,
    slideVisibility: false,
};

const editReducer = (state = initialState, action) => {
    console.log('Edit reducer recived: ' + action.type);
    switch (action.type) {
        case INIT_BASE:
            return {
                ...state,
                baseImgWidth: action.width,
                baseImgHeight: action.height,
            };
        case INIT_LOGO: {
            if (!state.userLogoImgInitialized) {

                const newState = {
                    ...state,
                    userLogoWidth: action.width,
                    userLogoHeight: action.height,
                    userLogoInitWidth: action.width,
                    userLogoInitHeight: action.height,
                    userLogoX: (state.baseImgWidth / 2) - (action.width / 2),
                    userLogoY: (state.baseImgHeight / 2) - (action.height / 2),
                    userLogoImgInitialized: true,
                };

                return saveState(newState);
            }
            return {
                ...state,
            }
        }

        case SET_BASE_IMG: {
            const newState = {
                ...state,
                baseImg: action.baseImg
            };

            return saveState(newState);
        }

        case UPLOAD_LOGO: {
            return {
                ...state,
                userLogoImg: action.userLogoImg,
            };
        }

        case SET_LOGO_POSITION: {
            const newState = {
                ...state,
                userLogoX: action.userLogoX,
                userLogoY: action.userLogoY,
            };

            return saveState(newState);
        }

        case CENTER_LOGO: {
            const newState = {
                ...state,
                userLogoX: (state.baseImgWidth / 2) - (state.userLogoWidth / 2),
                userLogoY: (state.baseImgHeight / 2) - (state.userLogoHeight / 2),
            };

            return saveState(newState);
        }

        case SET_LOGO_PROPERTIES: {
            return {
                ...state,
                userLogoWidth: action.width,
                userLogoHeight: action.height,
            };
        }

        case ROTATE_LEFT:
            return {
                ...state,
                rotation: state.rotation - 90,
            };

        case ROTATE_RIGHT: {
            const newState = {
                ...state,
                rotation: state.rotation + 90,
            };

            return saveState(newState);
        }

        case ZOOM_LOGO: {
            return {
                ...state,
                zoomRates: action.zoomRates,
                userLogoWidth: state.userLogoInitWidth * action.zoomRates,
                userLogoHeight: state.userLogoInitHeight * action.zoomRates,
            };
        }
        case HIDE_SLIDE:
            return {
                ...state,
                slideVisibility: false,
            };

        case TOGGLE_SLIDE: {
            return {
                ...state,
                slideVisibility: !state.slideVisibility,
            };
        }
        case UNDO: {
            return getPrevState(state);
        }

        case REDO: {
            return getNextState(state);
        }

        case SAVE_STATE: {
            return saveState(state);
        }

        default:
            return state;
    }
};

export default editReducer;