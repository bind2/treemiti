import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main style={{paddingTop: '7rem'}}>
        <Outlet/>
    </main>
  )
}

export default Main