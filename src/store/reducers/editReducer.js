import {
    CENTER_LOGO,
    HIDE_SLIDE,
    INIT_BASE,
    INIT_LOGO,
    SET_TEMPLATE,
    REDO, RESET_STATE,
    ROTATE_LEFT,
    ROTATE_RIGHT,
    SAVE_STATE,
    SET_FORMAT,
    SET_LOGO_POSITION,
    SET_LOGO_PROPERTIES, SET_ROTATION,
    TOGGLE_SLIDE,
    UNDO,
    UPLOAD_LOGO,
    ZOOM_LOGO
} from "../../const/actions";

import {getNextState, getPrevState, saveState} from './stateVersions';
import {BLACK_FOB_BASE_1, BLACK_FOB_COVER} from "../../const/templates";

const initialState = {
    stateId: 0,
    userLogoInitWidth: null,
    userLogoInitHeight: null,
    userLogoImgInitialized: false,
    zoomRates: 1,
    slideVisibility: false,
    userLogoImgUrl: null,
    buildLogoProperties: {
        baseImgUrl: BLACK_FOB_BASE_1,
        baseCoverImgUrl: BLACK_FOB_COVER,
        baseImgWidth: 416,
        baseImgHeight: 416,
        userLogoImg: null,
        userLogoWidth: null,
        userLogoHeight: null,
        userLogoX: 0,
        userLogoY: 0,
        rotation: 0,
        format: false,
    }
};

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_BASE:
            console.log(`Action: ${action.type}`);
            return {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    baseImgWidth: action.width,
                    baseImgHeight: action.height,
                }
            };
        case INIT_LOGO: {
            console.log(`Action: ${action.type}`);
            if (!state.userLogoImgInitialized) {
                console.log('test23');
                console.log(state);
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

        case SET_TEMPLATE: {
            console.log(`Action: ${action.type}`);
            const newState = {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    baseImgUrl: action.baseImg,
                    baseCoverImgUrl: action.baseCoverImg,
                },
            };

            return saveState(newState);
        }

        case UPLOAD_LOGO: {
            console.log(`Action: ${action.type}`);
            const newState = {
                ...initialState,
                userLogoImgUrl: action.userLogoImgUrl,
                buildLogoProperties: {
                    ...initialState.buildLogoProperties,
                    userLogoImg: action.userLogoImg,
                    baseImgWidth: state.buildLogoProperties.baseImgWidth,
                    baseImgHeight: state.buildLogoProperties.baseImgHeight,
                    baseImgUrl: state.buildLogoProperties.baseImgUrl,
                    baseCoverImgUrl: state.buildLogoProperties.baseCoverImgUrl,
                },
            };

            return newState;
        }

        case SET_LOGO_POSITION: {
            console.log(`Action: ${action.type}`);
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
            console.log(`Action: ${action.type}`);
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
            console.log(`Action: ${action.type}`);
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
            console.log(`Action: ${action.type}`);
            return {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    rotation: state.buildLogoProperties.rotation - 90,
                },
            };

        case ROTATE_RIGHT: {
            console.log(`Action: ${action.type}`);
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
            console.log(`Action: ${action.type}`);
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
            console.log(`Action: ${action.type}`);
            return {
                ...state,
                slideVisibility: false,
            };

        case TOGGLE_SLIDE: {
            console.log(`Action: ${action.type}`);
            return {
                ...state,
                slideVisibility: !state.slideVisibility,
            };
        }
        case UNDO: {
            console.log(`Action: ${action.type}`);
            return getPrevState(state);
        }

        case REDO: {
            console.log(`Action: ${action.type}`);
            return getNextState(state);
        }

        case SAVE_STATE: {
            console.log(`Action: ${action.type}`);
            return saveState(state);
        }

        case SET_ROTATION: {
            console.log(`Action: ${action.type}`);
            return {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    rotation: action.value
                }
            }
        }

        case SET_FORMAT: {
            console.log(`Action: ${action.type}`);
            return {
                ...state,
                buildLogoProperties: {
                    ...state.buildLogoProperties,
                    format: action.value,
                }
            }
        }
        case RESET_STATE: {
            return {
                ...initialState
            }
        }

        default:
            return state;
    }
};

export default editReducer;
