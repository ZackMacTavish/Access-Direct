import {
    CENTER_LOGO,
    HIDE_SLIDE,
    INIT_BASE,
    INIT_LOGO,
    REDO,
    ROTATE_LEFT,
    ROTATE_RIGHT,
    SAVE_STATE, SET_ADD_TEXT_SIZE, SET_ADD_TEXT_VALUE,
    SET_BASE_IMG, SET_FACILITY_CODE, SET_FONT_SIZE, SET_FORMAT,
    SET_LOGO_POSITION,
    SET_LOGO_PROPERTIES,
    SET_TEXT,
    TOGGLE_SLIDE,
    UNDO,
    UPLOAD_LOGO,
    ZOOM_LOGO
} from "../../const/actions";
import * as base64Img from "base64-img";
import {API_LOGO_DOWNLOAD_DESIGN} from "../../const/api";
import axios from "axios/index";
import {downloadBase64File} from "../../util/fileUtils";

export const initBase = (width, height) => {
    return {
        type: INIT_BASE,
        width: width,
        height: height,
    }
};

export const initLogo = (width, height) => {
    return {
        type: INIT_LOGO,
        width: width,
        height: height,
    }
};

export const setBaseImg = (baseImg, baseCoverImg) => {
    return {
        type: SET_BASE_IMG,
        baseImg: baseImg,
        baseCoverImg: baseCoverImg,
    }
};

export const uploadLogo = (userLogoImg, userLogoImgUrl) => {
    console.log('uploadLogo');
    console.log(userLogoImg);
    console.log(userLogoImgUrl);
    return {
        type: UPLOAD_LOGO,
        userLogoImg: userLogoImg,
        userLogoImgUrl: userLogoImgUrl,
    }
};

export const setLogoPosition = (x, y) => {
    return {
        type: SET_LOGO_POSITION,
        userLogoX: x,
        userLogoY: y,
    };
};

export const setLogoProperties = (width, height) => {
    return {
        type: SET_LOGO_PROPERTIES,
        width: width,
        height: height,
    }
};

export const centerLogo = () => {
    return {
        type: CENTER_LOGO
    }
};

export const rotateLeft = () => {
    return {
        type: ROTATE_LEFT,
    }
};

export const rotateRight = () => {
    return {
        type: ROTATE_RIGHT,
    }
};

export const zoomLogo = (zoomRates) => {
    return {
        type: ZOOM_LOGO,
        zoomRates: zoomRates,
    }
};

export const hideSlide = () => {
    return {
        type: HIDE_SLIDE,
    }
};

export const toggleSlide = () => {
    return {
        type: TOGGLE_SLIDE,
    }
};

export const undo = () => {
    return {
        type: UNDO,
    }
};

export const redo = () => {
    return {
        type: REDO,
    }
};

export const saveState = () => {
    return {
        type: SAVE_STATE,
    }
};

export const setAddTextSize = (value) => {
    return {
        type: SET_ADD_TEXT_SIZE,
        value: value,
    }
};

export const setAddTextValue = (value) => {
    return {
        type: SET_ADD_TEXT_VALUE,
        value: value,
    }
};

export const setFacilityCode = (value) => {
    return {
        type: SET_FACILITY_CODE,
        value: value
    }
};

export const setFormat = (value) => {
    return {
        type: SET_FORMAT,
        value: value
    }
};