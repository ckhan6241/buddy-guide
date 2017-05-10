import { createSelector } from 'reselect'
import _ from '../../util/lodash'

import { ageGroups } from './ProfilePreviewComponent'

import { profiles } from '../../mockData/profiles'

export default () => {

  const getProfiles = (state, props) => profiles

  const getTransportRequired = (state, props) => state.selections[ 'SELECT_TRANSPORT' ] || false
  const getAge = (state, props) => state.selections[ 'SELECT_AGE' ] || _.keysIn(ageGroups)
  const getSelectedPriceRange = (state, props) => state.selections[ 'SELECT_PRICE_RANGE' ]

  const filterAge = (profiles, agePredicates) => {
    console.log('filtering age', agePredicates)
    if (agePredicates.length == 0) {
      return []
    } else {
      return _.multiFilterBy(profiles, p=>p.age, agePredicates.map(p=>ageGroups[p]))
    }
  }

  const filterTransport = (profiles, transportRequired) => {
    if (transportRequired) {
      return profiles.filter(p => p.vehicle)
    } else {
      return profiles
    }
  }

  const filterPrice = (profiles, priceRange) => {
    return profiles.filter(p => p.dayRate >= priceRange[0] && p.dayRate <= priceRange[1])
  }

  const getMaxPriceRange = createSelector(
    getProfiles,
    profiles => {
      const price = profiles.map(p => p.dayRate)
      return [ _.min(price), _.max(price) ]
    }
  )

  const getPriceRange = createSelector(
    getSelectedPriceRange, getMaxPriceRange,
    (seletedPriceRange, maxPriceRange) => seletedPriceRange || maxPriceRange
  )

  const getFilteredProfiles = createSelector(
    getProfiles, getTransportRequired, getAge, getPriceRange,
    (profiles, transportRequired, age, priceRange) =>
      filterAge(
        filterTransport(
          filterPrice(profiles, priceRange),
          transportRequired),
        age)
  )

  return (
    (state, props) => {
      const { height } = props
      return {
        profiles: getFilteredProfiles(state, props),
        maxPriceRange: getMaxPriceRange(state, props),
        selectedPriceRange: getPriceRange(state, props),
        transportRequired: getTransportRequired(state, props),
        age: getAge(state, props)
      }
    }
  )

}