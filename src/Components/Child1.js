import React from 'react'
import {useSelector} from 'react-redux'

const Child1 = () => {
    const data = useSelector((state)=>state.show.value)
    console.log("data is here:",data);
  return (
    <div>Child1:{data}</div>
  )
}

export default Child1