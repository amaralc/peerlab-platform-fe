import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import SubCategories from './pages/Page01';
import SubmitOrder from './pages/Page02';
import TemplatePage01 from './pages/_templates/TemplatePage01';
import TemplatePage02 from './pages/_templates/TemplatePage02';
import TemplatePage04 from './pages/_templates/TemplatePage04';
import TemplatePage05 from './pages/_templates/TemplatePage05';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page-01" component={SubCategories} />
        <Route path="/page-02" component={SubmitOrder} />
        <Route path="/template-page-01" component={TemplatePage01} />
        <Route path="/template-page-02" component={TemplatePage02} />
        <Route path="/template-page-04" component={TemplatePage04} />
        <Route path="/template-page-05" component={TemplatePage05} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
