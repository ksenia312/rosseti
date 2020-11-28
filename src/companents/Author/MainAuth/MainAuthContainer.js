import React from 'react';
import connect from "react-redux/lib/connect/connect";
import {updateNewHolder1ActionCreator, updateNewHolderActionCreator} from "../../../Redux/authorMainReducer";
import MainAuth from "./MainAuth";

let mapStateToProps = (state) => {
    return {
        newHolderText: state.authorMain.newHolderText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewHolder: (text) => {

            dispatch(updateNewHolderActionCreator(text));

        },
        updateNewHolder1: (text) => {

            dispatch(updateNewHolder1ActionCreator(text));

        }
    }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(MainAuth)
export default AuthContainer;