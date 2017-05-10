import React, { Component } from 'react'
import Themed from '../../containers/Themed'
import { css } from 'glamor'

const PLACE = 'PLACE'
const TIME = 'TIME'
const PERSON = 'PERSON'

const Dimension = (comp) =>
  ({ onClick, focus, defaultText }) => {
    console.log(focus, comp)
    return (
      <div onClick={ onClick }>
        { focus ? <comp/> :
          defaultText
        }
      </div>
    )
} 

const PlaceDimension = Dimension(() => {
  console.log('here')
  return (
    <input type='text'>{"text box"}</input>
  )
})

const TimeDimension = Dimension(() => {
  return (
    <div>{"Time"}</div>
  )
})

const PersonDimension = Dimension(() => {
  return (
    <div>{"Person"}</div>
  )
})

const getStyle = (theme) => ({
  container: css`
    display: flex;
    height: 30px;
    min-width: 300px;
    max-width: 600px;
    justify-content: space-between;
    & > * {
      flex: 1 1 ${ 1/3 };
      background: none;
    }
    border: 1px solid;
    border-radius: 5px;
  `
})

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
    console.log(dimensionName)
    const { focus } = this.state
    this.setState({
      focus: dimensionName === focus ? null : dimensionName
    })
    console.log(this.state)
  }

  render() {
    const { onchange, theme, selections } = this.props
    const { focus } = this.state
    const styles = getStyle(theme)
    return (
      <div { ...styles.container }>
        <PlaceDimension onClick={ ()=>this.handleClick(PLACE) } focus={ focus===PLACE } defaultText={ "Place" }/>
        <TimeDimension onClick={ ()=>this.handleClick(TIME) } focus={ focus===TIME } defaultText={ "Time" }/>
        <PersonDimension onClick={ ()=>this.handleClick(PERSON) } focus={ focus===PERSON } defaultText={ "Person" }/>
      </div>
    )
  }
}

export default Themed(SearchBar)