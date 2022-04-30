import './App.css';
import {BrowserRouter as Router,Switch,NavLink,Route} from "react-router-dom";
import LoginPanel from './components/LoginPanel';
import Home from "./components/Home"

export default function App() {
  return(
      <div className='App'>
      <h1>Welcome to Journey</h1>
        <Router>
            <ul className='navBar'>
                <li>
                  <NavLink activeClassName="link" to="home">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="link" to="LoginPanel">Login</NavLink>
                </li>
            </ul>
          <Switch>
            <Route path='/home'  component={Home} />
            <Route path='/LoginPanel' component={LoginPanel} />
          </Switch>
        </Router>
      </div>
  );
}
