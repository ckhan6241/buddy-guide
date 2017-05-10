import { createSelector } from 'reselect'
import _ from 'lodash'

import { profiles } from '../../mockData/profiles'

export default () => {

  const getId = (state, props) => props.id

  const getProfile = createSelector(
    getId,
    id => _.filter(profiles, (x => x.id === id))[0]
  )

  return (
    (state, props) => {
      const { height } = props
      return {
        profile: getProfile(state, props)
      }
    }
  )
}