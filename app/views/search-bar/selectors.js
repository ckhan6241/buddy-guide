import { createSelector } from 'reselect'

export default () => {

  const getSelectedTimeRange = (state, props) => state.selections[ 'SELECT_TIME' ] || [ null, null ]

  const getSelectedPlace = (state, props) => state.selections[ 'SELECT_PLACE' ] || null

  const getSelectedPerson = (state, props) => state.selections[ 'SELECT_PERSON' ] || 1

  return (
    (state, props) => ({
      selectedTimeRange: getSelectedTimeRange(state, props),
      selectedPlace: getSelectedPlace(state, props),
      selectedPerson: getSelectedPerson(state, props)
    })
  )
}