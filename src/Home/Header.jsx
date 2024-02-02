import React from 'react'
import Img from "/assets/HomeIllustration.png"
import "./Header.css"
export default function Header() {
  return (
    <header id='Home'>
    <div className="HeaderTitle">
        <h1>Creativity starts with viewing the whole world differently</h1>
        <p>A company with customer satisfaction</p>
    </div>
    <div className='HeaderContent'>
        <button className='btn'>
            Get Started
        </button>
        <img src={Img}/>
    </div>
    </header>
  )
}
