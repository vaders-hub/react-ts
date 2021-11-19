import { Link } from "react-router-dom";

function HEADER() {
  return (
    <>
      <Link to="/">main </Link>
      <Link to="/member">member </Link>
      <Link to="/signin">signin </Link>
      <Link to="/board">board </Link>
    </>
  );
}

export default HEADER;
