import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button
} from 'shards-react'
import { receiveJobs } from '../actions/jobs'
import { searchForJobs } from '../utils/api'

function InputBox ({ dispatch }) {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [fulltime, setFullTime] = useState(false)

  const searchClicked = (e) => {
    e.preventDefault()
    searchForJobs({ description: search, location, fulltime }).then(res => {
      console.log(res)
      dispatch(receiveJobs(res))
    })
  }

  return <Card small className='mb-4'>
        <CardBody className='d-flex flex-column'>
            <Form className='quick-post-form' onSubmit={searchClicked}>
                <FormGroup>
                    <FormInput placeholder='Search' value={search} onChange={e => setSearch(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <FormInput placeholder='Location' value={location} onChange={e => setLocation(e.target.value)}/>
                </FormGroup>

                <FormGroup className='d-flex flex-row justify-content-between'>
                    <label className='align-self-center'>
                        <input id='fullTimeInputId' type='checkbox' onClick={() => setFullTime(!fulltime)}/>
                        <span className='pl-2'>Full Time Only</span>
                    </label>
                    <Button theme='accent' type='submit' className='align-self-center'>
                        Go
                    </Button>
                </FormGroup>
            </Form>
        </CardBody>
    </Card>
}

InputBox.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(InputBox)
