import "babel-polyfill"

import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import Root from './Root'

const renderApp = (RootComp) =>
  render(
    <AppContainer>
      <RootComp/>
    </AppContainer>,
    document.getElementById('root')
  )

renderApp(Root)

if (module.hot) {
  module.hot.accept('./Root', () => {
    renderApp(Root)
  })
}