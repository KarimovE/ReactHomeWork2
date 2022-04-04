import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home';
import Product from './components/pages/Products';
import Error from './components/pages/Error/Error';
import { Redirect } from 'react-router-dom';
import Login from './components/pages/Auth';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProtectedRoute = ({ state, children, ...rest }) => {
  return state ? (<Route {...rest}>{children}</Route>) : (<Redirect to={"/error"} />);};

function App() {
  const [state, setState] = React.useState(false);

  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>

      {/* <ProtectedRoute state={state} path="/products" component={Product} /> */}
      
        <Route path={"/login"} exact>
          <Login/>
        </Route>

      <Route path="/product" exact>
        <Product/>
      </Route>

      <Route path="/error" exact>
        <Error/>
      </Route>
      
      <Redirect to="/error" exact/>
    </Switch>
  </Router>
  );
}

export default App;
