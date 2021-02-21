export const RECEIVE_JOBS = 'RECEIVE_JOBS'

export function receiveJobs (jobs) {
  return {
    type: RECEIVE_JOBS,
    jobs
  }
}
