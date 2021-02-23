import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  Form,
  Row,
  Col,
  FormInput,
  Button
} from 'shards-react'
import { receiveJobs } from '../actions/jobs'
import { searchForJobs } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

function InputBox ({ dispatch }) {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [fulltime, setFullTime] = useState(false)

  const searchClicked = (e) => {
    e.preventDefault()
    dispatch(showLoading())
    searchForJobs({ description: search, location, fulltime }).then(res => {
      dispatch(receiveJobs(res))
      dispatch(hideLoading())
    })
  }

  return <Card small className='mb-4 w-100'>
        <CardBody className='d-flex flex-column'>
            <Form onSubmit={searchClicked}>
                <Row form>
                    <Col md="8" className="form-group flex-grow-1">
                        <FormInput id='search' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)}/>
                    </Col>
                    <Col md="4" className="form-group">
                        <FormInput id='location' placeholder='Location' value={location} onChange={e => setLocation(e.target.value)}/>
                    </Col>
                    <Col className='d-flex flex-row justify-content-between'>
                        <label className='align-self-center'>
                            <input id='fullTimeInputId' type='checkbox' onClick={() => setFullTime(!fulltime)}/>
                            <span className='pl-2'>Full Time Only</span>
                        </label>
                        <Button id='button-go' theme='accent' type='submit' className='align-self-center'>
                            Go
                        </Button>
                    </Col>
                </Row>
            </Form>
        </CardBody>
    </Card>
}

InputBox.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(InputBox)
