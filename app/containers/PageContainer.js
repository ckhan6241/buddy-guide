import { connect } from 'react-redux'
import { compose, pure, setDisplayName, withReducer, withProps } from 'recompose'
import Measured from './Measured'

export default function PageContainer(viewSpec) {
  const { displayName, graph, actions, selector, reducer } = viewSpec

  const mapStateToProps = selector
  const mapDispatchToProps = actions && {
    ...actions.global,
  }
  const storeConnector = connect(mapStateToProps, mapDispatchToProps)

  const wrappers = [
    setDisplayName(displayName + ':PageContainer'),
    reducer && withReducer('localState', 'dispatchLocal', reducer),
    pure,
    storeConnector,
    reducer && actions && actions.local && withProps(mapDispatchLocalToProps(actions.local, 'dispatchLocal')),
    Measured
  ].filter(c => c)
  return compose.apply(this, wrappers)
}