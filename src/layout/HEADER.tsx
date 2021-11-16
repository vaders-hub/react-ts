import { Link} from 'react-router-dom';

function HEADER() {
  return (
    <>
      <Link to="/">main </Link>
      <Link to="/register">register </Link>
      <Link to="/board">board </Link>
    </>
  )
}

export default HEADER