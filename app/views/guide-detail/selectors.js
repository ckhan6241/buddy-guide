import { createSelector } from 'reselect'
import _ from 'lodash'

import { datas } from '../../mockData/datas'

export default () => {

  const getId = (state, props) => props.id || '0'

  const getData = createSelector(
    getId,
    id => _.filter(datas, (x => x.id === id))[0]
  )

  const getNumberOfData = (state, props) => datas.length

  const getNextId = createSelector(
    getId, getNumberOfData,
    (id, maxId) => maxId == parseInt(id) + 1 ? 0 : parseInt(id) + 1
  )

  const getPreviousId = createSelector(
    getId, getNumberOfData,
    (id, maxId) => 0 == parseInt(id) ? maxId - 1 : parseInt(id) - 1
  )

  return (
    (state, props) => {
      const { height } = props
      return {
        data: getData(state, props),
        prev: getPreviousId(state, props),
        next: getNextId(state, props)
      }
    }
  )
}