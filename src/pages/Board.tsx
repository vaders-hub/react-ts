import { useEffect, useState } from 'react';
import apis from '../plugins/apis';

const Board = () => {
  const [list, setList] = useState<any[]>([])
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });

  const { title, body } = inputs;

  useEffect(() => {
    onLoad()
    console.log('mounted')
    return () => {
      console.log('unmount')
    };
  }, []);

  const onLoad = async (): Promise<any> => {
    const result = await apis({
      url: '/bbs/read',
      method: 'get',
      data: {
      }
    })
    if (result) {
      const { data } = result
      setList(data.body)
    }
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, name } = e.target;
    console.log('onchange', value)
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onWrite = async (): Promise<any> => {
    const result = await apis({
      url: '/bbs/write',
      method: 'post',
      data: {
        title: title, body: body
      }
    })
    if (result) {
      setInputs({ title: '', body: '' })
    }
  }

  return (
    <div>
      <h2>board</h2>
      <input name="title" onChange={onChange} value={title} />
      <input name="body" onChange={onChange} value={body} />
      <button type="button" onClick={onWrite}>
        write
      </button>
      <ul>
        {list.map((v, idx) =>
          <li key={idx}>{v.title} <button>del</button></li>
        )}
      </ul>
    </div>
  );
}

export default Board;