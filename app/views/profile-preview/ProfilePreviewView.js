import ProfilePreviewComponent from './ProfilePreviewComponent'
import ViewContainer from '../../containers/ViewContainer'
import actions from './actions'
import selectors from './selectors'

const spec = {

  displayName: 'ProfilePreviewView',

  actions,

  selectors

}

export default ViewContainer(spec)(ProfilePreviewComponent)