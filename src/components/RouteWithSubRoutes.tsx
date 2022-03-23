import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { IRoute } from "../interface/common.js";

const RouteWithSubRoutes = (route: IRoute): React.ReactElement => {
  /** Authenticated flag */

  const { member }: any = useSelector((state) => state);
  const authenticated = member.signedIn;
  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : route.private ? (
            authenticated ? (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect to="/signin" />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          )
        }
      />
    </Suspense>
  );
};
export default RouteWithSubRoutes;
