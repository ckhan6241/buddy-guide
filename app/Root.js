import React, { Component } from 'react'
import { Router, hashHistory } from 'react-router'
import createRoutes from './routes'

export default class Root extends Component {

  render() {
    if (!module.hot || !this.routes) {
      this.routes = createRoutes()
    }
    return (
      <Router history={ hashHistory } routes={ this.routes } />
    )
  }
}