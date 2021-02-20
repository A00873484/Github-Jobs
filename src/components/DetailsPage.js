import React, { useEffect, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { searchForJob } from '../utils/api'

function DetailsPage (props) {
  const id = props.match.params.id
  const [selected, setSelected] = useState({})

  useEffect(() => {
    searchForJob(id).then(res => {
      console.log(res)
      setSelected(res)
    })
  }, [])

  return (
    <div>
      <img
        src={selected.company_logo}
        alt={'Company Logo'}
        className='logo'
      />
    </div>
  )
}

DetailsPage.propTypes = {
  match: propTypes.object
}

export default DetailsPage
