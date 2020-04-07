import React, { FC } from 'react';
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from '~/views/homepage';
import CategoryPage from '~/views/category';
import NotFound from '~/views/not-found';
import Nav from '~/components/nav';
import CreateCategory from '~/components/create-category';
import CreateLink from '~/components/create-link';

const Routing: FC = () => (
  <HashRouter>
    <Nav />
    <Route
      render={({ location }: any) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Homepage} />
            <Route path="/:category/:id" component={CategoryPage} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      )}
    />
    <CreateCategory />
    <CreateLink />
  </HashRouter>
);

export default Routing;
