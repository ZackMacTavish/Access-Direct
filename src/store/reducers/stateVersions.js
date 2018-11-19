const stateVersions = [];

export const saveState = (newState) => {
    const stateResult = {
        ...newState,
        stateId:  stateVersions.length,
    };

    stateVersions.push(stateResult);

    return stateResult;
};

export const getPrevState = (state) => {
    const currentId = state.stateId;
    const prevId = currentId - 1;

    if(prevId < 0){
        return state;
    }

    return stateVersions.find((stateVersion) => stateVersion.stateId === state.stateId - 1);
};

export const getNextState = (state) => {
    const currentId = state.stateId;
    const lastId = stateVersions.length - 1;

    if(currentId >= lastId){
        return state;
    }

    return stateVersions.find((version) => version.stateId === state.stateId + 1);
};
