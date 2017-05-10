export default {

  global: {
    onSelectTimeRange: (timeRange) => ({ type: 'SELECT', key: 'SELECT_TIME', value: timeRange }),

    onSelectPlace: (place) => ({ type: 'SELECT', key: 'SELECT_PLACE', value: place }),

    onSelectPerson: (person) => ({ type: 'SELECT', key: 'SELECT_PERSON', value: person })
  }
}