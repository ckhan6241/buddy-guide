import React, { Component } from 'react'
import 'glamor/reset'
import { View } from 'glamor/jsxstyle'
import Menu from './Menu'
import { Provider } from 'react-redux'
import { css } from 'glamor'
import { MENU_HEIGHT } from './Menu'

export default class App extends Component {

  store

  constructor(props) {
    super(props)
    this.store = props.store
  }

  render() {
    const { children } = this.props
    return (
      <Provider store={ this.store }>
        <View width='100%' height='100%' position='absolute'>
          <View width='100%' height={ MENU_HEIGHT } position='fixed'>
            <Menu/>
          </View>
          <View width='100%' position='absolute' top='40' bottom='0' right='0'>
            { children }
          </View>
        </View>
      </Provider>
    )
  }
}