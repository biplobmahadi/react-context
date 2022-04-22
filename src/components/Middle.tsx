import React from 'react'
import SecondMiddleMemo from './SecondMiddle'

function Middle() {

  return (
      <React.Fragment>
          <div>Middle</div>
          <SecondMiddleMemo/>
      </React.Fragment>
  )
}

const MiddleMemo = React.memo(Middle)
export default MiddleMemo;