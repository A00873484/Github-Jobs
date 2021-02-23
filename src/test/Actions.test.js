import configureStore from 'redux-mock-store'
import { DataArray } from '../utils/testdata'
import { receiveJobs, RECEIVE_JOBS } from '../actions/jobs'

const mockStore = configureStore()
const store = mockStore()

describe('selectAvatar', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
            type: RECEIVE_JOBS,
            jobs: DataArray
        }
      ]
      store.dispatch(receiveJobs(DataArray))
      expect(store.getActions()).toEqual(expectedActions)
      expect(store.getActions()).toMatchSnapshot();
    })
})