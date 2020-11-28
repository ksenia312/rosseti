
let initialState = {
    newHolderText: '',
}
let UPDATE_NEW_HOLDER_TEXT ='UPDATE_NEW_HOLDER_TEXT'

const authorMainReducer = (state=initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case UPDATE_NEW_HOLDER_TEXT :
            stateCopy.newHolderText = action.newHolder;
            return stateCopy

        default:
            return state

    }
}

export const updateNewHolderActionCreator = (text) => ({type: UPDATE_NEW_HOLDER_TEXT, newHolder: text})

export default authorMainReducer;