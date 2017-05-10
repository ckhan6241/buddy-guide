import React, { Component } from 'react'
import { Flex, View } from 'glamor/jsxstyle'

import PageContainer from '../../containers/PageContainer'
import SearchBar from '../../views/search-bar'
import ProfilePreview from '../../views/profile-preview'

const SEARCH_BAR_HEIGHT = 50

class HomePage extends Component {

  props

  render() {
    const {height} = this.props
    return (
      <Flex width='100%' alignItems='center' flexDirection='column' position='absolute'>
        <View padding={ 10 } position='fixed' height={ SEARCH_BAR_HEIGHT } zIndex={10}>
          <SearchBar/>
        </View>
        <View padding={ 10 } position='relative' top={ SEARCH_BAR_HEIGHT } width={ '90%' }>
          <ProfilePreview height={height - SEARCH_BAR_HEIGHT - 20}/>
        </View>
      </Flex>
    )
  }
}

const spec = {

  displayName: 'HomePage'

}

export default PageContainer(spec)(HomePage)