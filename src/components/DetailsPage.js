import React from 'react'
import { connect } from 'react-redux'
import { propTypes } from 'react-bootstrap/esm/Image'
import parse from 'html-react-parser'
import {
  Card,
  CardHeader,
  Col
} from 'shards-react'

function DetailsPage ({ job }) {
  if (job.id !== 0) {
    return (
        <Col>
        <Card small className='mb-4'>
            <CardHeader>
                <h6 className='m-0'>{job.company}</h6>
            </CardHeader>
                {/* Avatar */}
                <div className=' mr-3'>
                    <img src={job.company_logo} alt={job.company} />
                </div>
                {/* Content */}
                <div className='blog-comments__content'>
                    {/* Content :: Title */}
                    <div className='blog-comments__meta text-mutes'>
                    <a className='text-secondary' href={job.company_url}>
                        {job.company_url}
                    </a>{' '}
                    on{' '}
                    <div className='text-secondary' >
                        {job.title}
                    </div>
                    <span className='text-mutes'>- {new Date(job.created_at).toDateString()}</span>
                    </div>

                    {/* Content :: Body */}
                    {parse(job.description)}
                </div>
        </Card>
        </Col>
    )
  }
  return null
}

DetailsPage.propTypes = {
  job: propTypes.object
}

function mapStateToProps ({ jobs }, props) {
  const { id } = props.match.params
  console.log(id)
  console.log(jobs[id])
  if (!jobs[id]) {
    props.history.push('/')
    return { job: { id: 0 } }
  } else {
    return {
      job: jobs[id]
    }
  }
}

export default connect(mapStateToProps)(DetailsPage)
