import jobs from './jobs'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  jobs,
  loadingBarReducer
})
