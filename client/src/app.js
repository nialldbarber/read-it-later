import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Pages
import Homepage from '~/pages/homepage'
import CategoryPage from '~/pages/category-page'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/category/:id" component={CategoryPage} />
    </Switch>
  </Router>
)

export default App
