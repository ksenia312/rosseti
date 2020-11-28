
import connect from "react-redux/lib/connect/connect";
import StartPage from "./startPage";



let mapStateToProps = (state) => {
    return {
        authorstartPage: state.authorstartPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

}}

const StartPageContainer = connect(mapStateToProps, mapDispatchToProps)(StartPage)
export default StartPageContainer