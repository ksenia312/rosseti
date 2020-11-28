
let initialState = {
    newHolderText: '',
}
let UPDATE_NEW_HOLDER_TEXT ='UPDATE_NEW_HOLDER_TEXT'
let UPDATE_NEW_HOLDER_TEXT1 = 'UPDATE_NEW_HOLDER_TEXT1'
const authorMainReducer = (state=initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case UPDATE_NEW_HOLDER_TEXT :
            stateCopy.newHolderText = action.newHolder;
            return stateCopy
        case UPDATE_NEW_HOLDER_TEXT1 :
            stateCopy.newHolderText1 = action.newHolder1;
            return stateCopy
        default:
            return state

    }
}

export const updateNewHolderActionCreator = (text) => ({type: UPDATE_NEW_HOLDER_TEXT, newHolder: text})
export const updateNewHolder1ActionCreator = (text) => ({type: UPDATE_NEW_HOLDER_TEXT1, newHolder1: text})
export default authorMainReducer;