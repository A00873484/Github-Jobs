import React, { Fragment } from 'react'
import HomePage from './HomePage'
import DetailsPage from './DetailsPage'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Fragment>
        <header>
          <LoadingBar style={{ backgroundColor: '#017BFE' }}/>
        </header>
        <div className='container'>
          <Route path='/' exact component={HomePage}/>
          <Route path='/details/:id' exact component={DetailsPage}/>
        </div>
      </Fragment>
    </Router>
  )
}

export default App
