import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { CategoryProvider } from '~/state/context/category';
import Homepage from '~/views/homepage';
import CategoryPage from '~/views/category';
import Nav from '~/components/nav';
import CreateCategory from '~/components/create-category';
import { client } from '~/utils/apollo';
import { onPageExit } from '~/utils/animation';
import { GlobalStyle } from '~/styles/base/global';
import { theme } from '~/styles/utils/variables';

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CategoryProvider>
        <GlobalStyle />
        <Router>
          <Nav />
          <AnimatePresence exitBeforeEnter onExitComplete={onPageExit}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/category/:id" component={CategoryPage} />
            </Switch>
          </AnimatePresence>
        </Router>
        <CreateCategory />
      </CategoryProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
