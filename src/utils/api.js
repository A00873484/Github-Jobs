import appendToGet from './appendToGet'
import axios from 'axios'

// removes all instances other than 'Full Time' since the API doesn't
function onlyFullTime (data) {
  return data.filter((inst) => inst.type === 'Full Time')
}

export async function searchForJobs ({ description, fulltime, location }) {
  const res = await axios.get(`http://localhost:3001/github/jobs${appendToGet({ description, location, full_time: fulltime })}`)
  return fulltime ? onlyFullTime(res.data) : res.data
}

export async function searchForJob (id) {
  const res = await axios.get(`http://localhost:3001/github/job?id=${id}`)
  return res.data
}
