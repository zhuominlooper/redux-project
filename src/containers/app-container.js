
import App from "../components/App";
import { connect } from "react-redux";
import { addAction,decreaseAction } from "../redux/actions";
export default connect(
    state=>({data:state}),
    {addAction,decreaseAction}
)(App)

