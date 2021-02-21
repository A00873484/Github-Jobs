import { Col, Card, CardHeader, CardBody } from 'shards-react'
import { withRouter } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

function Table ({ jobs, history }) {
  const jobClicked = (id) => {
    history.push(`/details/${id}`)
  }

  return (
    <Col>
        <Card small className='mb-4'>
            <CardHeader className='border-bottom'>
                <h6 className='m-0'>Jobs</h6>
            </CardHeader>
            <CardBody className='p-0 pb-3 overflow-auto'>
                <table className='table mb-0'>
                    <thead className='bg-light'>
                        <tr>
                            <th scope='col' className='border-0'>Company Name</th>
                            <th scope='col' className='border-0'>Role</th>
                            <th scope='col' className='border-0'>Location</th>
                            <th scope='col' className='border-0'>Type</th>
                            <th scope='col' className='border-0'>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => (
                                <tr key={job.id} onClick={() => jobClicked(job.id)}>
                                    <td>{job.company}</td>
                                    <td>{job.title}</td>
                                    <td>{job.location}</td>
                                    <td>{job.type}</td>
                                    <td>{new Date(job.created_at).toDateString()}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </CardBody>
        </Card>
    </Col>
  )
}

Table.propTypes = {
  jobs: PropTypes.array,
  history: PropTypes.func
}

export default withRouter(Table)
