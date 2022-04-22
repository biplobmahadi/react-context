import React from "react";
import CounterMemo from "./Counter";

function SecondMiddle() {

  return (
      <React.Fragment>
          <div>SecondMiddle</div>
          <CounterMemo/>
      </React.Fragment>
  )
}

const SecondMiddleMemo = React.memo(SecondMiddle)
export default SecondMiddleMemo;