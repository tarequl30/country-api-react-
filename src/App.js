
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from "./components/noMatch/NoMatch";


function App() {
 
  return (

    <Router>
      <Switch>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="*">
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
