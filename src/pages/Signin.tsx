import { useEffect, useState } from 'react';
import apis from '../plugins/apis';

const Signin = () => {
  const [inputs, setInputs] = useState({
    memid: '',
    mempw: ''
  });

  const { memid, mempw } = inputs; 

  useEffect(() => {
    onLoad()
    console.log('mounted')
    return () => {
      console.log('unmount')
    };
  }, []);

  const onLoad = async (): Promise<any> => {
    console.log('loaded')
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void  => {
    const { value, name } = e.target; 
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onSignin = async (): Promise<any> => {
    const result = await apis({
      url: '/members/signin',
      method: 'post',
      data: {
        memid: memid, mempw: mempw
      }
    })
    console.log('result', result)
  }
  
  return (
    <div>
      <h2>Signin</h2>
      <div>
        <input type="text" name="memid" placeholder="id" onChange={onChange} value={memid} />
        <input type="password" name="mempw" placeholder="pw" onChange={onChange} value={mempw}/>
        <button type="button" onClick={onSignin}>
          sign-in
        </button>
      </div>
    </div>
  );
}

export default Signin;