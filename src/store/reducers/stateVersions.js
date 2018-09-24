const stateVersions = [];

export const saveState = (newState) => {
    const stateResult = {
        ...newState,
        id:  stateVersions.length,
    };

    stateVersions.push(stateResult);

    return stateResult;
};

export const getPrevState = (state) => {
    const currentId = state.id;
    const prevId = currentId - 1;

    if(prevId < 0){
        return state;
    }

    return stateVersions.find((stateVersion) => stateVersion.id === state.id - 1);
};

export const getNextState = (state) => {
    const currentId = state.id;
    const lastId = stateVersions.length - 1;

    if(currentId >= lastId){
        return state;
    }

    return stateVersions.find((version) => version.id === state.id + 1);
};
