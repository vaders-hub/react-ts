import { Route, Switch} from 'react-router-dom';
import Board from '../pages/Board'
import Register from '../pages/Register'

function BODY() {
  return (
    <>
      <Switch>
        <Route path="/register" component={Register} /> 
        <Route path="/board" component={Board} /> 
      </Switch>
    </>
  )
}

export default BODY