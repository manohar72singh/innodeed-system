import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Learn from './Learn'
import Shop from './Shop'
export default function NavRouter() {
  return (
    <>
      <Routes>
        <Route path='/learn/' element={<Learn/>}/>
        <Route path='/shop/' element={<Shop/>}/>
      </Routes>
    </>
  )
}
