import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from "./Nav"
import  Game  from "./pages/Game";
import  Home  from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";

function Routes() {
  return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/rules" component={Rules} />
          <Route path="/about" component={About} />
    
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default Routes;