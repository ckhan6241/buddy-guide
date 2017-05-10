import React, { Component } from 'react'
import { Flex, View } from 'glamor/jsxstyle'

import PageContainer from '../../containers/PageContainer'
import GuideDetail from '../../views/guide-detail'

class NewHomePage extends Component {

  props

  render() {
    const {height} = this.props
    const { guideId } = this.props.params
    return (
      <GuideDetail height={height} id={ guideId }/>
    )
  }
}

const spec = {

  displayName: 'NewHomePage'

}

export default PageContainer(spec)(NewHomePage)