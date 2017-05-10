import SearchBarComponent from './SearchBarComponent'
import ViewContainer from '../../containers/ViewContainer'
import actions from './actions'
import selectors from './selectors'

const spec = {

  displayName: 'SearchBarView',

  actions,

  selectors

}

export default ViewContainer(spec)(SearchBarComponent)