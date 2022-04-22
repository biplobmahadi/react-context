import React from 'react'
import MiddleMemo from './Middle'

function Home() {

  return (
      <React.Fragment>
          <div>Home</div>
          <MiddleMemo/>
      </React.Fragment>
  )
}

const HomeMemo = React.memo(Home)
export default HomeMemo;