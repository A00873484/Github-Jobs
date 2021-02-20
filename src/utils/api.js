import appendToGet from './appendToGet'
import axios from 'axios'

export async function searchForJobs ({ description, fulltime, location }) {
  const res = await axios.get(`http://localhost:3001/github/jobs${appendToGet({ description, location, full_time: fulltime })}`)
  console.log(res)
  return res.data
}

export async function searchForJob (id) {
  const res = await axios.get(`http://localhost:3001/github/job?id=${id}`)
  console.log(res)
  return res.data
}
