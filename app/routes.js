import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import { withProps } from 'recompose'
import App from './containers/App'
import configure from './configureStore'

import HomePage from './pages/home-page'
import NewHomePage from './pages/new-home-page'
import GuideCard from './pages/guide-card'

export default function createRoutes() {
  const withStore = withProps({ store: configure() })
  return (
    <Route path='/' component={ withStore(App) }>
      <IndexRedirect to='/home-page' />
      <Route path='/home-page/:guideId' component={ NewHomePage } />
      <Route path='/guide-card/:guideId' component={ GuideCard } />
      <Route path='/guide-card' component={ GuideCard } />
    </Route>
  )
}