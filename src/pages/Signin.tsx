import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apis from "../plugins/apis";
import { passAuth, signOut } from "../modules/member";
import Input from "../components/Input";

const Signin = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { member }: any = useSelector((state) => state);

  const [inputs, setInputs] = useState({
    memid: "",
    mempw: "",
  });

  const { memid, mempw } = inputs;

  useEffect(() => {
    // state obsever
    // observeStore(store, () => store.getState().member, () => {});
    return () => {
      // clean up local state
      // setSignedIn(false);
    };
  }, []);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignin = async (): Promise<any> => {
    dispatch(passAuth(memid, mempw));
    setInputs({ memid: "", mempw: "" });
  };

  const onSignOut = () => {
    dispatch(signOut());
  };

  const onEnc = async (): Promise<any> => {
    const result = await apis({
      url: "/members/enc",
      method: "post",
      data: {
        mempw: mempw,
      },
    });
    console.log("enc result", result.data);
  };

  const onDec = async (): Promise<any> => {
    const result = await apis({
      url: "/members/dec",
      method: "post",
      data: {
        memid: memid,
      },
    });
    console.log("dec result", result.data);
  };

  return (
    <div>
      <div
        style={
          member.signedIn === true ? { display: "none" } : { display: "block" }
        }
      >
        <Input type="text" name="memid" onChange={onChange} value={memid} />
        <Input
          type="password"
          name="mempw"
          placeholder="pw"
          onChange={onChange}
          value={mempw}
        />
        <button type="button" onClick={onSignin}>
          sign-in
        </button>
        <button type="button" onClick={onEnc}>
          enc
        </button>
        <button type="button" onClick={onDec}>
          dec
        </button>
      </div>
      <div
        style={
          member.signedIn === true ? { display: "block" } : { display: "none" }
        }
      >
        <button type="button" onClick={onSignOut}>
          sign-out
        </button>
      </div>
    </div>
  );
};

export default Signin;
