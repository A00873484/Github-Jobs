import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

function DetailsPage ({ job, history }) {
  const backToHome = () => {
    history.push('/')
  }
  if (job.id !== 0) {
    return (
      <div className='col'>
        <div className='page-header py-3'>
          <div onClick={backToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-fill ml-3" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
          </div>
        </div>
          <div className='card mb-4 px-4 py-4'>
              <div className='mb-4 d-flex justify-content-center'>
                  <img src={job.company_logo} alt={job.company} className="w-25 img-fluid"/>
              </div>
              <h3 className="mb-3">{job.company}</h3>
              <div className="pb-4">
                  <a className='text-secondary' href={job.company_url}>
                      {job.company_url}
                  </a>
                  <div id='location'>{job.location}</div>
                  <div id='title'>{job.title}</div>
                  <div id='type'>{job.type}</div>
              </div>
              <div className='blog-comments__content'>
                  {parse(job.description)}
              </div>
              <span id='date' className='text-mutes'>{new Date(job.created_at).toDateString()}</span>
          </div>
      </div>
    )
  }
  return null
}

DetailsPage.propTypes = {
  job: PropTypes.object,
  history: PropTypes.object
}

function mapStateToProps ({ jobs }, props) {
  const { id } = props.match.params
  if (!jobs[id]) {
    props.history.push('/')
    return { job: { id: 0 } }
  } else {
    return {
      job: jobs[id],
      history: props.history
    }
  }
}

export default connect(mapStateToProps)(DetailsPage)
