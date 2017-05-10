import _ from 'lodash'

const oneOfCondition = (item, predicates, which) => {
  if (predicates.length <= which) {
    console.log('in')
    return false
  } else if (predicates[which](item)) {
    return true
  } else {
    return oneOfCondition(item, predicates, ++which)
  }
}

_.multiFilterBy = (items, byFunction, predicates) => items.filter(i => oneOfCondition(byFunction(i), predicates, 0))

export default _