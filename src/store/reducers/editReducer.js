import {
    CENTER_LOGO,
    HIDE_SLIDE,
    INIT_BASE,
    INIT_LOGO,
    REDO,
    ROTATE_LEFT,
    ROTATE_RIGHT,
    SAVE_STATE,
    SET_ADD_TEXT_SIZE,
    SET_ADD_TEXT_VALUE,
    SET_BASE_IMG,
    SET_LOGO_POSITION,
    SET_LOGO_PROPERTIES,
    SET_TEXT,
    TOGGLE_SLIDE,
    UNDO,
    UPLOAD_LOGO,
    ZOOM_LOGO
} from "../../const/actions";

import {getNextState, getPrevState, saveState} from './stateVersions';
import {BLACK_FOBO_COVER_IMG_NAME, BLACK_FOBO_IMG_NAME} from "../../const/images";

const initialState = {
    stateId: 0,
    userLogoInitWidth: null,
    userLogoInitHeight: null,
    userLogoImgInitialized: false,
    zoomRates: 1,
    slideVisibility: false,
    userLogoImgUrl: null,
    buildLogoProperties: {
        baseImgName: BLACK_FOBO_IMG_NAME,
        baseCoverImgName: BLACK_FOBO_COVER_IMG_NAME,
        baseImgWidth: 0,
        baseImgHeight: 0,
        userLogoImg: null,
        userLogoWidth: null,
        userLogoHeight: null,
        userLogoX: 0,
        userLogoY: 0,
        rotation: 0,
    }
};

const editReducer = (state = initialState, action) => {
    console.log('Edit reducer recived: ' + action.type);
    switch (action.type) {
        case INIT_BASE:
            return {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    baseImgWidth: action.width,
                    baseImgHeight: action.height,
                }
            };
        case INIT_LOGO: {
            if (!state.userLogoImgInitialized) {

                const newState = {
                    ...state,
                    userLogoImgInitialized: true,
                    userLogoInitWidth: action.width,
                    userLogoInitHeight: action.height,
                    buildLogoProperties: {
                        ...state.buildLogoProperties,
                        userLogoWidth: action.width,
                        userLogoHeight: action.height,
                        userLogoX: (state.buildLogoProperties.baseImgWidth / 2) - (action.width / 2),
                        userLogoY: (state.buildLogoProperties.baseImgHeight / 2) - (action.height / 2),
                    },
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
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    baseImgName: action.baseImg,
                    baseCoverImgName: action.baseCoverImg,
                },
            };

            return saveState(newState);
        }

        case UPLOAD_LOGO: {
            const newState = {
                ...state,
                userLogoImgUrl: action.userLogoImgUrl,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    userLogoImg: action.userLogoImg,
                },
            };

            return newState;
        }

        case SET_LOGO_POSITION: {
            const newState = {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    userLogoX: action.userLogoX,
                    userLogoY: action.userLogoY,
                },
            };

            return saveState(newState);
        }

        case CENTER_LOGO: {
            const newState = {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    userLogoX: (state.buildLogoProperties.baseImgWidth / 2) - (state.buildLogoProperties.userLogoWidth / 2),
                    userLogoY: (state.buildLogoProperties.baseImgHeight / 2) - (state.buildLogoProperties.userLogoHeight / 2),
                },
            };

            return saveState(newState);
        }

        case SET_LOGO_PROPERTIES: {
            return {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    userLogoWidth: action.width,
                    userLogoHeight: action.height,
                },
            };
        }

        case ROTATE_LEFT:
            return {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    rotation: state.buildLogoProperties.rotation - 90,
                },
            };

        case ROTATE_RIGHT: {
            const newState = {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    rotation: state.buildLogoProperties.rotation + 90,
                },
            };

            return saveState(newState);
        }

        case ZOOM_LOGO: {
            return {
                ...state,
                zoomRates: action.zoomRates,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    userLogoWidth: state.userLogoInitWidth * action.zoomRates,
                    userLogoHeight: state.userLogoInitHeight * action.zoomRates,
                },
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