let initialState = {

    proposals: []
}
let SET_PROPOSALS='SET_PROPOSALS'

const StartPageReducer = (state=initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_PROPOSALS :

            return stateCopy

        default:
            return state
    }
}

export const setProposalsActionCreator = () => ({type: SET_PROPOSALS})
export default StartPageReducer;