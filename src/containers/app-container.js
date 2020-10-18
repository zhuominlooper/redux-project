
import App from "../components/App";
import { connect } from "../libs/react-redux/index";
import { add,decrease } from "../redux/actions";

export default connect(
    state=>({data:state}),
    {add,decrease}
)(App)

