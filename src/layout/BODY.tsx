import React from "react";
import { Route, Switch } from "react-router";
import { IRoute } from "../interface/common.js";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import HOME from "../pages/HOME";

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route: IRoute) => {
        return <RouteWithSubRoutes key={route.path} {...route} />;
      })}
    </Switch>
  );
};

export default Router;
