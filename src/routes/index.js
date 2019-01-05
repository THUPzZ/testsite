import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../components/Main'
import Project from '../components/Project'
import Post from '../components/Post'
import About from '../components/About'

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
)