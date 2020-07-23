import React, { FC } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { CategoryProvider } from '~/state/context/category';
import { LinkProvider } from '~/state/context/link';
import Routing from '~/components/routing';
import { client } from '~/utils/apollo';
import { GlobalStyle } from '~/styles/base/global';
import { theme } from '~/styles/utils/variables';

const App: FC = () => (
  <ApolloProvider {...{client}}>
    <ThemeProvider {...{theme}}>
      <CategoryProvider>
        <LinkProvider>
          <GlobalStyle />
          <Routing />
        </LinkProvider>
      </CategoryProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
