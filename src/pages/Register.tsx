import { useEffect, useState } from 'react';
// import axios from 'axios';

const Register = () => {
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
    console.log('onchange')
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onRegister = async (): Promise<any> => {

  }
  
  return (
    <div>
      <h2>Register</h2>
      <div>
        <input type="text" name="memid" placeholder="id" onChange={onChange} value={memid} />
        <input type="password" name="mempw" placeholder="pw" onChange={onChange} value={mempw}/>
        <button type="button" onClick={onRegister}>
          register
        </button>
      </div>
    </div>
  );
}

export default Register;