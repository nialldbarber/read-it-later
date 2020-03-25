import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import Homepage from '~/views/homepage';
import CategoryPage from '~/views/category';
import Nav from '~/components/nav';
import CreateCategory from '~/components/create-category';
import { client } from '~/utils/apollo';
import { GlobalStyle } from '~/styles/base/global';
import { theme } from '~/styles/utils/variables';

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/category/:id" component={CategoryPage} />
        </Switch>
      </Router>
      <CreateCategory />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
