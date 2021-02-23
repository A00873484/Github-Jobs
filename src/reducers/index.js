import jobs from './jobs'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  jobs,
  loadingBarReducer
})
