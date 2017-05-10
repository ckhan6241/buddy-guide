import React, { Component } from 'react'
import { Flex, View } from 'glamor/jsxstyle'
import PageContainer from '../../containers/PageContainer'
import GuideCardView from '../../views/guide-info'

class GuideCard extends Component {

  props

  constructor(props) {
    super(props)
  }

  render() {
    const { guideId } = this.props.params
    return (
      <div>
        <GuideCardView id={ guideId }/>
      </div>
    )
  }
}

const spec = {

  displayName: 'GuideCard'

}

export default PageContainer(spec)(GuideCard)