import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { IRoute } from "../../interface/common.js";
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";

const Member = ({ routes }: any): React.ReactElement => {
  return (
    <div>
      <h2>Member</h2>
      <Switch>
        {routes.map((route: IRoute) => {
          return <RouteWithSubRoutes key={route.path} {...route} />;
        })}
      </Switch>
    </div>
  );
};

export default Member;
