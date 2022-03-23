import { useDispatch } from "react-redux";
import { setLang } from "../modules/lang";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import SelectBox from "@components/SelectBox";

function HEADER(): React.ReactElement {
  const dispatch = useDispatch();
  const procEmit = (e: any) => {
    const lang = e.target.value;
    dispatch(setLang(lang));
  };
  return (
    <>
      <SelectBox onChange={procEmit} />
      <Link to="/">main </Link>
      <Link to="/member/login">member </Link>
      <div>
        <Link to="/member/list">member list </Link>
        <Link to="/member/profile/1">profile list </Link>
      </div>
      <Link to="/signin">signin </Link>
      <Link to="/board">board </Link>
      <Link to="/list">list </Link>
    </>
  );
}

export default HEADER;
