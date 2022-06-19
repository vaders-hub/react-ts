import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from "../modules/bbs";
import apis from "../plugins/apis";
import { ResponseGenerator } from "../interface/common";
import { BoardResponse } from "../apis/bbs";
import { State } from "../interface/state";

const Board = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { bbsList } = useSelector((state: State) => ({
    bbsList: state.bbs.bbsList,
  }));
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const { title, body } = inputs;

  useEffect(() => {
    // onLoad();
    console.log("mounted");
    return () => {
      console.log("unmount");
    };
  }, []);

  const onLoad = () => {
    dispatch(fetchList());
  };

  const getCookie = async (): Promise<void> => {
    const result = await apis({
      url: "/bbs/get-cookie",
      method: "get",
      data: {},
    });

    if (result) {
      console.log("result", result);
    }
  };

  const delCookie = async (): Promise<void> => {
    const result = await apis({
      url: "/bbs/del-cookie",
      method: "get",
      data: {},
    });

    if (result) {
      console.log("result", result);
    }
  };

  const testtoken = async (): Promise<ResponseGenerator | undefined> => {
    const result = await apis({
      url: "/bbs/test-token",
      method: "get",
      data: {},
    });
    if (result) {
      return result;
    }
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onWrite = async (): Promise<void> => {
    const result = await apis({
      url: "/bbs/write",
      method: "post",
      data: {
        title: title,
        body: body,
      },
    });
    if (result) {
      setInputs({ title: "", body: "" });
    }
  };

  return (
    <div>
      <h2>board</h2>
      <input name="title" onChange={onChange} value={title} />
      <input name="body" onChange={onChange} value={body} />
      <button type="button" onClick={onWrite}>
        write
      </button>
      <button type="button" onClick={testtoken}>
        testtoken
      </button>
      <ul>
        {bbsList.map(
          (v: BoardResponse, idx: number): React.ReactNode => (
            <li key={idx}>
              {v.title} <button>del</button>
            </li>
          )
        )}
      </ul>
      <div>
        {/* <p>bbs list {bbsList}</p> */}
        <button onClick={onLoad}>get bbs</button>
        <button onClick={getCookie}>get cookie</button>
        <button onClick={delCookie}>delete cookie</button>
      </div>
    </div>
  );
};

export default Board;
