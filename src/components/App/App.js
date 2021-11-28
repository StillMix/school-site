import './App.css';
import NotFound from '../NotFound/NotFound';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Homework from '../Homework/Homework';
import Education from '../Education/Education';
import React from 'react';
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

function App() {
  const [tems, setTems] = React.useState(false)

  const history = useHistory();
  const routesMenu = ['/signin', '/notfound'];

  return (
    <div className={`${tems ? 'dark' : 'white'}`}>
      {useRouteMatch(routesMenu) ? null : (
          <Menu tems={tems} setTems={setTems} />
        )}
      <Switch>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
          <Route path="/main">
            <Main tems={tems}/>
          </Route>
        <Route path="/homework">
          <Homework tems={tems} />
        </Route>
        <Route path="/education">
          <Education tems={tems}/>
        </Route>
        <Route path="/notfound">
          <NotFound tems={tems} />
        </Route>
          <Route>
          <Redirect to="/notfound" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
