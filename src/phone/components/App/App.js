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
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

function App() {
  const [tems, setTems] = React.useState(false)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const routesMenu = ['/signin', '/notfound'];

  return (
    <div className={`${tems ? 'dark' : 'white'}`}>
      {useRouteMatch(routesMenu) ? null : (
          <Menu tems={tems} isOpen={isOpenMenu} setIsOpen={setIsOpenMenu}  setTems={setTems} />
        )}
      <Switch>
        <Route exact path="/school-site">
          <Redirect to="/main" />
        </Route>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <Route exact path="/main">
            <Main tems={tems}/>
          </Route>
        <Route exact path="/homework">
          <Homework tems={tems} />
        </Route>
        <Route exact path="/education">
          <Education exact tems={tems}/>
        </Route>
        <Route exact path="/notfound">
          <NotFound tems={tems} />
        </Route>
        <Route path="*">
          <Redirect to="/notfound" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
