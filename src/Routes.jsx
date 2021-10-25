import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from "./Nav"
import  Game  from "./pages/Game";
import  Home  from "./pages/Home";

function Routes() {
  return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default Routes;