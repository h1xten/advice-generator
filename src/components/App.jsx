import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Advice from './advice/Advice'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
        <div className='App'>
            <Advice />
        </div>
    </BrowserRouter>
  )
}

export default App
