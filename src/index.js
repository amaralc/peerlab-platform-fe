import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import SubCategories from './pages/SubCategories';
import SubmitOrder from './pages/SubmitOrder';
import TemplatePage1 from './pages/_templates/TemplatePage1';
import TemplatePage2 from './pages/_templates/TemplatePage2';
import TemplatePage3 from './pages/_templates/TemplatePage3';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sub-categories" component={SubCategories} />
        <Route path="/submit-order" component={SubmitOrder} />
        <Route path="/template-page-1" component={TemplatePage1} />
        <Route path="/template-page-2" component={TemplatePage2} />
        <Route path="/template-page-3" component={TemplatePage3} />
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
