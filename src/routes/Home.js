import React from 'react'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'

function Home() {
  return (
    <>
     <Navbar/>  
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    title="Your Journey Your Story"
    text="Choose your favourite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home
