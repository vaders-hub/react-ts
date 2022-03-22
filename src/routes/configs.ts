import { lazy } from "react";
import { IRoute } from "../interface/common.js";

export const routes: IRoute[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/HOME")),
    exact: true,
    fallback: `<div> Loading... </div>`,
  },
  {
    path: "/member",
    component: lazy(() => import("../pages/Member/")),
    exact: false,
    private: false,
    fallback: `<div> Loading... </div>`,
    routes: [
      {
        path: "/member/login",
        component: lazy(() => import("../pages/Member/root")),
        exact: false,
        private: false,
        fallback: `<div> Loading... </div>`,
      },
      {
        path: "/member/list",
        component: lazy(() => import("../pages/Member/list")),
        exact: false,
        private: false,
        fallback: `<div> Loading... </div>`,
      },
      {
        path: "/member/profile/:id",
        component: lazy(() => import("../pages/Member/profile")),
        exact: false,
        private: true,
        fallback: `<div> Loading... </div>`,
      },
    ],
  },
  {
    path: "/signin",
    component: lazy(() => import("../pages/Signin")),
    exact: false,
    private: false,
    fallback: `<div> Loading... </div>`,
  },
  {
    path: "/board",
    component: lazy(() => import("../pages/Board")),
    exact: false,
    private: false,
    fallback: `<div> Loading... </div>`,
  },
  {
    path: "/list",
    component: lazy(() => import("../pages/List")),
    exact: false,
    private: false,
    fallback: `<div> Loading... </div>`,
  },
  {
    path: "*",
    component: lazy(() => import("../pages/NotFound")),
    exact: false,
    private: false,
    fallback: `<div> Loading... </div>`,
  },
];
