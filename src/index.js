import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login'


ReactDOM.render(
    (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/timeline" component={App} />
          </div>
        </BrowserRouter>
    ),
    document.getElementById('root')
);