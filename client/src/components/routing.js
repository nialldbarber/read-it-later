import React from 'react';
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from '~/views/homepage';
import CategoryPage from '~/views/category';
import Nav from '~/components/nav';
import CreateCategory from '~/components/create-category';
import CreateLink from '~/components/create-link';
import { onPageExit } from '~/utils/animation';

const Routing = () => (
  <HashRouter>
    <Nav />
    <AnimatePresence exitBeforeEnter onExitComplete={onPageExit}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:category/:id" component={CategoryPage} />
      </Switch>
    </AnimatePresence>
    <CreateCategory />
    <CreateLink />
  </HashRouter>
);

export default Routing;
