import React, { Component } from 'react'
import Themed from '../../containers/Themed'
import { css } from 'glamor'
import Dimension from './Dimension'
import PlaceDimension from './PlaceDimension'
import TimeDimension from './TimeDimension'
import PersonDimension from './PersonDimension'
import { formatDate } from '../../util/time'

const PLACE = 'PLACE'
const TIME = 'TIME'
const PERSON = 'PERSON'

const getStyle = (theme) => ({
  container: css`
    display: flex;
    height: 40px;
    width: 600px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-radius: 3px;
    border-color: #ccc;
    box-shadow: 0px 0px 1px 1px #ccc;
  `
})

const generateTimeText = (timeRange) => {
  const [start, end] = timeRange
  if (start || end) {
    return (start ? formatDate(start) : "Start Date") + ' - ' + (end ? formatDate(end) : "End Date")
  } else {
    return "Any time"
  }
}

const generatePlaceText = (place) => {
  return place || "Any place"
}

class SearchBar extends Component {

  props

  state

  constructor(props) {
    super(props)
    this.state = {
      focus: null
    }
  }

  handleClick = (dimensionName) => {
    const { focus } = this.state
    if (dimensionName !== focus) {
      this.setState({
        focus: dimensionName
      })
    }
  }

  handleTimeRangeChange = (start, end) => {
    const { selectedTimeRange, onSelectTimeRange } = this.props
    //TODO: time order logic
    onSelectTimeRange([
      start ? start : selectedTimeRange[0],
      end ? end : selectedTimeRange[1]
    ])
  }

  handlePlaceChange = (place) => {
    const { onSelectPlace } = this.props
    onSelectPlace(place)
  }

  render() {
    const { onchange, theme, selections } = this.props
    const { selectedTimeRange, selectedPlace } = this.props
    const { focus } = this.state
    const styles = getStyle(theme)
    return (
      <div { ...styles.container }>
        <PlaceDimension
          onClick={ ()=>this.handleClick(PLACE) }
          focus={ focus===PLACE }
          onChange={ this.handlePlaceChange }
          defaultText={ generatePlaceText(selectedPlace) }
        />
        <TimeDimension 
          onClick={ ()=>this.handleClick(TIME) }
          onChange={ this.handleTimeRangeChange }
          focus={ focus===TIME }
          defaultText={ generateTimeText(selectedTimeRange) }
          startTime={ selectedTimeRange[0] }
          endTime={ selectedTimeRange[1] }
        />
        <PersonDimension onClick={ ()=>this.handleClick(PERSON) } focus={ focus===PERSON } defaultText={ "1 Person" }/>
      </div>
    )
  }
}

export default Themed(SearchBar)