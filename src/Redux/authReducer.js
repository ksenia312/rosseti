let initialState = {
    newLoginText: '',
    newPasswordText: '',
    auth: [],
}

let UPDATE_LOGIN_TEXT = 'UPDATE_LOGIN_TEXT'
let UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT'
let SEND_LOG_PAS = 'SEND_LOG_PAS'
const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case UPDATE_LOGIN_TEXT :
            stateCopy.newLoginText = action.newLogin;
            return stateCopy
        case UPDATE_PASSWORD_TEXT :
            stateCopy.newPasswordText = action.newPassword;
            return stateCopy
        case SEND_LOG_PAS :
            let newAuth = {
                login: state.newLoginText,
                password: state.newPasswordText
            };
            stateCopy.auth = [...state.auth]
            stateCopy.auth.push(newAuth);
            stateCopy.newPasswordText = ''
            stateCopy.newLoginText = ''
            return stateCopy
        default:
            return state


    }
}
export const updatePasswordActionCreator = (login) => ({type: UPDATE_LOGIN_TEXT, newLogin: login})
export const updateLoginActionCreator = (password) => ({type: UPDATE_PASSWORD_TEXT, newPassword: password})
export const sendLogPasActionCreator = () => ({type: SEND_LOG_PAS})
export default authReducer