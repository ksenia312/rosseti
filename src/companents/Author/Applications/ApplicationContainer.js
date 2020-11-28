import connect from "react-redux/lib/connect/connect";
import Applications from "./Application";



let mapStateToProps = (state) => {

    return {

        application: state.authorApplication.application,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ApplicationContainer = connect(mapStateToProps, mapDispatchToProps)(Applications)
export default ApplicationContainer;
