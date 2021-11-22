import { Route, Switch } from "react-router-dom";
import Guard from "../components/Guard";
import Board from "../pages/Board";
import Member from "../pages/Member";
import Signin from "../pages/Signin";

const BODY = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/member" component={Member} />
        <Route path="/signin" component={Signin} />
        {/* <Route path="/board" component={Board} /> */}
        <Guard path="/board" component={Board} auth={true} extra={false} />
      </Switch>
    </>
  );
};

export default BODY;
