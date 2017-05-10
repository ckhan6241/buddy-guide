import React, { Component } from 'react'
import { css } from 'glamor'
import Dimension from './Dimension'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Moment from 'moment'


const DateSelector = ({displayDate, defaultText, onChange}) => {
  if (!displayDate) {
    return <div> { defaultText } </div>
  } else {
    return <DatePicker selected={ displayDate } onChange={ onChange }/>
  }
}

class TimeDimension extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { onChange } = this.props
    onChange(Moment(), Moment().add(1, 'days'))
  }

  render() {
    const { startTime, endTime, onChange } = this.props
    return (
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <DateSelector displayDate={ startTime ? startTime : Moment() } defaultText={ "Start Date" } onChange={ (date) => onChange(date, null) }/>
        <div style={{padding: '5px'}}>
        -
        </div>
        <DateSelector displayDate={ endTime ? endTime : Moment().add(1, 'days') } defaultText={ "End Date" }
          onChange={ (date) => onChange(null, date) }
        />
      </div>
    )
  }
}

export default Dimension(TimeDimension)