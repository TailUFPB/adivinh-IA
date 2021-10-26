import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from "./Nav"
import About from './pages/About';
import  Game  from "./pages/Game";
import  Home  from "./pages/Home";
import Rules from './pages/Rules';

function Routes() {
  return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/about" component={About} />
          <Route path="/rules" component={Rules} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default Routes;