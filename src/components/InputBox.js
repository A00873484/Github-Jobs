import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormCheckbox,
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

  return <Card small className='h-100'>
        {/* Card Header */}
        <CardHeader className='border-bottom'>
            <h6 className='m-0'>Search Jobs</h6>
        </CardHeader>

        <CardBody className='d-flex flex-column'>
            <Form className='quick-post-form' onSubmit={searchClicked}>
                {/* Title */}
                <FormGroup>
                    <FormInput placeholder='Search' value={search} onChange={e => setSearch(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <FormInput placeholder='Location' value={location} onChange={e => setLocation(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <FormCheckbox checked={fulltime} onClick={() => setFullTime(!fulltime)}>
                        Full Time Only
                    </FormCheckbox>
                </FormGroup>

                <FormGroup className='mb-0'>
                    <Button theme='accent' type='submit'>
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
