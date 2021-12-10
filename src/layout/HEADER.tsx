import { Link } from "react-router-dom";

function HEADER(): JSX.Element {
  return (
    <>
      <Link to="/">main </Link>
      <Link to="/member">member </Link>
      <Link to="/signin">signin </Link>
      <Link to="/board">board </Link>
      <Link to="/list">list </Link>
    </>
  );
}

export default HEADER;
