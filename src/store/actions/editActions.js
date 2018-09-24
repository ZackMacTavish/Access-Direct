import {
    CENTER_LOGO, HIDE_SLIDE,
    INIT_BASE, INIT_LOGO, REDO, ROTATE_LEFT, ROTATE_RIGHT, SAVE_STATE,
    SET_BASE_IMG,
    SET_LOGO_POSITION,
    SET_LOGO_PROPERTIES, TOGGLE_SLIDE, UNDO,
    UPLOAD_LOGO, ZOOM_LOGO
} from "../../const/actions";


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

export const setBaseImg = (baseImg) => {
    return {
        type: SET_BASE_IMG,
        baseImg: baseImg
    }
};

export const uploadLogo = (userLogoImg) => {
    return {
        type: UPLOAD_LOGO,
        userLogoImg: userLogoImg,
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




