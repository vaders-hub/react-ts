import { Route, Redirect } from "react-router-dom";
import { IdxSign, ReactComp } from "../interface/common";

// const GuardedRoute: FunctionComponent<ReactComp & IdxSign> = ({
const GuardedRoute = ({
  component: Component,
  auth,
  ...rest
}: ReactComp & IdxSign): React.ReactElement => {
  const cond = (props: IdxSign) => {
    return <Component {...props} />;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? cond({ props, rest }) : <Redirect to="/signin" />
      }
    />
  );
};

export default GuardedRoute;
