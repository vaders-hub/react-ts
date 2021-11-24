import { Route, Redirect } from "react-router-dom";
import { IdxObjx } from "../interface/common";

const GuardedRoute = ({
  component: Component,
  auth,
  ...rest
}: IdxObjx): React.ReactElement => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default GuardedRoute;
