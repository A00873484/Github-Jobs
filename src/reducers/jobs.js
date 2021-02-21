import { RECEIVE_JOBS } from '../actions/jobs'

export default function jobs (state = {}, action) {
  const objobs = {}
  switch (action.type) {
    case RECEIVE_JOBS:
      action.jobs.forEach((job) => {
        objobs[job.id] = job
      })
      return objobs
    default:
      return state
  }
}
