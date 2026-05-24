import React from 'react'
import Footer from '../components/pages/footer'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <>
       < Navbar/>
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default MainLayouts