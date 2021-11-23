import { useEffect, useState } from "react";
import apis from "../plugins/apis";

const Member = (): JSX.Element => {
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

  const onRegister = async (): Promise<any> => {
    const result = await apis({
      url: "/members/signup",
      method: "post",
      data: {
        memid: memid,
        mempw: mempw,
      },
    });
    console.log("result", result);
  };

  return (
    <div>
      <h2>Member</h2>
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
        <button type="button" onClick={onRegister}>
          register
        </button>
      </div>
    </div>
  );
};

export default Member;
