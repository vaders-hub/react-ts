import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { IRoute } from "../../interface/common.js";
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../modules/member";

const Member = (): React.ReactElement => {
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

  const onRegister = async (): Promise<any> => {
    dispatch(register(memid, mempw));
  };

  return (
    <div>
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
