// const GuardedRoute: FunctionComponent<ReactComp & IdxSign> = ({
interface LangTypes {
  code: string;
  lang: string;
}
const SelectBox = (props: any): React.ReactElement => {
  //   console.log("props", props);
  const { type, name } = props;
  const emitChage = (e: React.FormEvent<HTMLSelectElement>) => {
    props.onChange(e);
  };
  const options: LangTypes[] = [
    { code: "en", lang: "english" },
    { code: "fr", lang: "french" },
    { code: "de", lang: "deutsch" },
  ];

  return (
    <select name={name} onChange={emitChage}>
      {options.map((val: LangTypes, index: number) => (
        <option key={index} value={val.code}>
          {val.lang}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
