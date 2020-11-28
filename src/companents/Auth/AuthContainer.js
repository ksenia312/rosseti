
import connect from "react-redux/lib/connect/connect";
import Auth from "./Auth";
import {sendLogPasActionCreator, updateLoginActionCreator, updatePasswordActionCreator} from "../../Redux/authReducer";



let mapStateToProps = (state) => {
    return {
        newLoginText: state.authPage.newLoginText,
        newPasswordText:state.authPage.newPasswordText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendLogPas: () => {
            dispatch(sendLogPasActionCreator())
        },
        updateLogin: (login) => {
            dispatch(updatePasswordActionCreator(login));
        },
        updatePassword: (password) => {
            dispatch(updateLoginActionCreator(password));
        }

    }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)
export default AuthContainer;
