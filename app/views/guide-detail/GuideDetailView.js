import GuideDetailComponent from './GuideDetailComponent'
import ViewContainer from '../../containers/ViewContainer'
// import actions from './actions'
import selectors from './selectors'

const spec = {

  displayName: 'GuideDetailView',

  // actions,

  selectors

}

export default ViewContainer(spec)(GuideDetailComponent)