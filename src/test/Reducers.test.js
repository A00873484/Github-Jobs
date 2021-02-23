import jobsReducer from '../reducers/jobs';
import { DataObject, DataArray } from '../utils/testdata'
import { RECEIVE_JOBS } from '../actions/jobs'

describe('RECEIVE_JOBS', () => {
  test('returns the correct state', () => {
    const action = { type: RECEIVE_JOBS, jobs: DataArray };
    expect(jobsReducer(undefined, action)).toEqual(DataObject);
  });
});
