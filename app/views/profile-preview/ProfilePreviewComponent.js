import React, { Component } from 'react'
import Themed from '../../containers/Themed'
import { css } from 'glamor'
import { Flex, View } from 'glamor/jsxstyle'
import _ from 'lodash'
import PriceSlider from './PriceSlider'

import ProfileContainer from './ProfileContainer'

export const ageGroups = {
  '16 - 25 years old': (age) => age >= 16 && age <= 25,
  '26 - 35 years old': (age) => age >= 26 && age <= 35,
  '36 - 45 years old': (age) => age >= 36 && age <= 45,
  'Above 45 years old': (age) => age >= 46
}

const AgeGroupControl = (props) => {
  const { selectedAge } = props
  const { onChange } = props
  return (
    <div>
      Age group
      <Flex flexDirection={ 'column '}>
        {
          _.map(ageGroups, (f, age) =>
            <div key={ age }>
              <input type='checkbox' checked={ selectedAge.includes(age) } onChange={ ()=>onChange(age) }/> { age }
            </div>
          )
        }
      </Flex>
    </div>
  )
}

const LanguageControl = (props) => <div> LanguageControl </div>

const getStyle = (theme) => ({
  controls: css`
    flex-direction: column;
    padding: 10;
    position: fixed;
    & > * {
      margin: 10;
    }
  `
})

class ProfilePreview extends Component {

  constructor(props) {
    super(props)
  }

  handleSelectAge(selectingAge) {
    const { age } = this.props
    const { onChangeAge } = this.props
    onChangeAge( (age.includes(selectingAge) ? _.without: _.concat)(age, selectingAge) )
  }

  handleSelectTransport() {
    const { transportRequired } = this.props
    const { onChangeTransport } = this.props
    onChangeTransport(!transportRequired)
  }

  render() {
    const { profiles } = this.props
    const { maxPriceRange, selectedPriceRange, transportRequired, age } = this.props
    const { onChangePriceRange } = this.props
    const { height, theme } = this.props
    const styles = getStyle(theme)
    return (
      <Flex width={ '100%' } height={ '100%' } position={'relative'}>
        <Flex width={ '15%' } height={ '100%' } {...styles.controls}>
          <div>
            <input type='checkbox' checked={ transportRequired } onChange={ this.handleSelectTransport.bind(this) }/> Transport Included
          </div>
          < AgeGroupControl selectedAge={ age } onChange={ this.handleSelectAge.bind(this) }/>
          < PriceSlider min={ maxPriceRange[0]-10 } max= { maxPriceRange[1]+10 } selection={ selectedPriceRange } onChange={ onChangePriceRange }/>
          < LanguageControl />
        </Flex>
        <View left={ '20%' } width={ '60%' } padding={ '10px 50px' } overflowY={ 'scroll' } position={ 'relative' } height={ height } minWidth={ 600 }>
          { profiles.map(p => <ProfileContainer key={ p.name } { ...p } />) }
        </View>
      </Flex>
    )
  }

}

export default Themed(ProfilePreview)