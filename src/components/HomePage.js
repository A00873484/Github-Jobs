import React from 'react'
import { Container, Row } from 'shards-react'
import JobsTable from './JobsTable'
import InputBox from './InputBox'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PageTitle from './common/PageTitle'

function HomePage ({ jobs }) {
  return (
    <div>
      <Container fluid className='main-content-container px-4'>
      <Row noGutters className='page-header py-4'>
        <PageTitle title='Search' subtitle='Github Jobs' className='text-sm-left mb-3' />
      </Row>
        <Row>
          <InputBox/>
        </Row>
        <Row noGutters className='page-header py-4'>
          {
            jobs.length > 0 && <JobsTable jobs={jobs} />
          }
        </Row>
      </Container>
    </div>
  )
}

HomePage.propTypes = {
  jobs: PropTypes.array
}

function mapStateToProps ({ jobs = [] }) {
  console.log(jobs)
  return {
    jobs
  }
}

export default connect(mapStateToProps)(HomePage)
