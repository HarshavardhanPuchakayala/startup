import React from 'react'
import Navbar from "../Components/Navbar"
import Header from './Header'
import Model from "../Components/Model"
import Feedback from "../Components/Feedback"
import Services from '../Components/Services'
import MoreServices from "../Components/MoreServices"
import Subscribe from "../Components/Subscribe"
import Footer from "../Components/Footer"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Services/>
    <Model/>
    <MoreServices/>
    <Feedback/>
    <Subscribe/>
    
    </>
  )
}
