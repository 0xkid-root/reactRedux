import React from 'react'
import Child1 from './Components/Child1'
import Child2 from './Components/Child2'
import SubChild1 from './Components/SubChild1'
import './App.css';

const App = () => {
  return (
    <div className='App-header'>
    <Child1/>
    <Child2/>
    <SubChild1/>
    </div>
  )
}

export default App