import { connect } from 'react-redux'
import Themed from './Themed'
import { compose, pure, setDisplayName, withReducer, withProps, shouldUpdate } from 'recompose'

export default function ViewContainer(viewSpec) {
  const { displayName, selectors, actions, reducer } = viewSpec

  const mapStateToProps = selectors
  const mapDispatchToProps = actions && {
    ...actions.global,
  }
  const storeConnector = connect(mapStateToProps, mapDispatchToProps)

  const wrappers = [
    setDisplayName(displayName + ':ViewContainer'),
    reducer && withReducer('localState', 'dispatchLocal', reducer),
    pure,
    shouldUpdate((props, nextProps) => !nextProps.isFetching),
    Themed,
    storeConnector,
    reducer && actions && actions.local && withProps(mapDispatchLocalToProps(actions.local, 'dispatchLocal'))
  ].filter(c => c)

  return compose.apply(this, wrappers)
}