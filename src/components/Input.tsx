// const GuardedRoute: FunctionComponent<ReactComp & IdxSign> = ({
const Input = (props: any): React.ReactElement => {
  //   console.log("props", props);
  const { type, name } = props;
  const emitChage = (e: any) => {
    props.onChange(e);
  };

  return <input name={name} type={type} onChange={emitChage}></input>;
};

export default Input;
