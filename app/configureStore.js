import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const middleware = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
}