import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { searchForJobs } from '../utils/api'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

function HomePage ({ history }) {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [fulltime, setFullTime] = useState(false)
  const [jobs, setJobs] = useState([])

  const jobClicked = (id) => {
    history.push(`/details/${id}`)
  }

  const searchClicked = () => {
    searchForJobs({ description: search, location, fulltime }).then(res => {
      setJobs(res)
    })
  }
  return (
    <div>
      <input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}/>
      <label>
        Full Time Only
        <input type="checkbox" onClick={() => setFullTime(!fulltime)}/>
      </label>
      <Button onClick={searchClicked}>Go</Button>
      <Table responsive>
        <thead>
          <th>Company Name</th>
          <th>Role</th>
          <th>Location</th>
          <th>Type</th>
          <th>Created At</th>
        </thead>
        <tbody>
          {
            jobs.map(job => (
              <tr key={job.id} onClick={() => jobClicked(job.id)}>
                <td>{job.company}</td>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.type}</td>
                <td>{job.created_at}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

HomePage.propTypes = {
  history: PropTypes.func
}

export default withRouter(HomePage)
