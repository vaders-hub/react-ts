import { Route, Switch } from "react-router-dom";
import Board from "../pages/Board";
import Member from "../pages/Member";
import Signin from "../pages/Signin";

function BODY() {
  return (
    <>
      <Switch>
        <Route path="/member" component={Member} />
        <Route path="/signin" component={Signin} />
        <Route path="/board" component={Board} />
      </Switch>
    </>
  );
}

export default BODY;
