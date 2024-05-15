import { Outlet } from 'react-router-dom'
import React from 'react'
import { Header , Navbar } from '../components'

export default function HomeLayout() {
    

    return (
        <>
        <Header/>
        <Navbar/> 
          <main className='align-content'>
            <Outlet />
          </main>
        </>
    )
}
