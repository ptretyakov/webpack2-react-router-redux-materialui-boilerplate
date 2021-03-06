import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './app/app.container';
import ContactsRoutes from './app/pages/contacts/contacts.routes';
import IndexContainer from './app/pages/index/index.container';
import Page404Component from './app/pages/page-404.component'

export default (
  <Route path={ AppContainer.path } component={ AppContainer }>
      <IndexRoute component={ IndexContainer } />

      { ContactsRoutes }

      <Route path="*" component={ Page404Component } />
  </Route>
);
