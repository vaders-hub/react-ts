import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from "../modules/bbs";
import apis from "../plugins/apis";

const Board = () => {
  const dispatch = useDispatch();
  const { bbsList } = useSelector((state: any) => ({
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

  const testtoken = async (): Promise<any> => {
    const result = await apis({
      url: "/bbs/test-token",
      method: "get",
      data: {},
    });
    if (result) {
    }
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, name } = e.target;
    console.log("onchange", value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onWrite = async (): Promise<any> => {
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
        {bbsList.map((v: any, idx: number) => (
          <li key={idx}>
            {v.title} <button>del</button>
          </li>
        ))}
      </ul>
      <div>
        {/* <p>bbs list {bbsList}</p> */}
        <button onClick={onLoad}>get bbs</button>
      </div>
    </div>
  );
};

export default Board;
