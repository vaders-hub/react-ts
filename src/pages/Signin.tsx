import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apis from "../plugins/apis";
import { passAuth } from "../modules/member";

const Signin = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    memid: "",
    mempw: "",
  });

  const { memid, mempw } = inputs;

  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmount");
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
      <h2>Signin</h2>
      <div>
        <input
          type="text"
          name="memid"
          placeholder="id"
          onChange={onChange}
          value={memid}
        />
        <input
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
    </div>
  );
};

export default Signin;
