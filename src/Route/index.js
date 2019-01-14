import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Contact from '../Components/Contact'
import About from '../Components/About'
import Notpage from '../Components/Notpage'

export default () => (
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="" component={Notpage} />
  </Switch>
)