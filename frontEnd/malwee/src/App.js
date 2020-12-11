import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Estatisticas from './components/estatisticas';
import Ordens from './components/ordens';
import Login from './components/login';
import Inicial from './components/inicial';
import PrivateRoute from './components/commom/privateroute';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact  component={Inicial} />
          <Route path='/login'  component={Login} />
          <Route path='/estatisticas'  component={Estatisticas} />
          <PrivateRoute path='/ordens'  component={Ordens} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
