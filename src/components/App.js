import React, { Fragment } from 'react'
import HomePage from './HomePage'
import DetailsPage from './DetailsPage'
import { LoadingBar } from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Fragment>
        <LoadingBar/>
        <div className='container'>
          <Route path='/' exact component={HomePage}/>
          <Route path='/details/:id' exact component={DetailsPage}/>
        </div>
      </Fragment>
    </Router>
  )
}

export default App
