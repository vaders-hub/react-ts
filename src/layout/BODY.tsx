import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Guard from "../components/Guard";
import Board from "../pages/Board";
import Member from "../pages/Member";
import Signin from "../pages/Signin";
import List from "../pages/List";

const BODY = (): React.ReactElement => {
  const { member }: any = useSelector((state) => state);

  useEffect(() => {
    return () => {
      console.log("body unmount");
    };
  }, []);
  return (
    <>
      <Switch>
        <Route path="/member" component={Member} />
        <Route path="/signin" component={Signin} />
        {/* <Route path="/board" component={Board} /> */}
        <Guard
          path="/board"
          component={Board}
          auth={member.signedIn}
          extra="something"
        />
        <Route path="/list" component={List} />
      </Switch>
    </>
  );
};

export default BODY;
