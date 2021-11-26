import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Guard from "../components/Guard";
import Board from "../pages/Board";
import Member from "../pages/Member";
import Signin from "../pages/Signin";
import { store, observeStore } from "../store";

const BODY = (): React.ReactElement => {
  store.subscribe(() => {
    const member: any = store.getState().member;
    if (member.signedIn === true) {
      setSignedIn(true);
    }
  });
  const [signedIn, setSignedIn] = useState(false);
  const stateChanged = (o: any) => {
    console.log("?", o);
  };

  observeStore(store, () => store.getState().member, stateChanged);

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
        <Guard path="/board" component={Board} auth={signedIn} />
      </Switch>
    </>
  );
};

export default BODY;
