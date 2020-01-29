import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from '~/pages/homepage'
import CategoryPage from '~/pages/category-page'
import Nav from '~/components/nav'

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/category/:id" component={CategoryPage} />
    </Switch>
  </Router>
)

export default App
