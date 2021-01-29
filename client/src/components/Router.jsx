/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/listing/:id">
        <App />
      </Route>
    </Switch>
  </HashRouter>
);

export default Router;
