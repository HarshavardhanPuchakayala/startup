import React,{useState} from 'react'
import "./Navbar.css"
import { IoMenu } from "react-icons/io5";
import Path from "/assets/Path.svg"
export default function Navbar() {
    const [Menu,setMenu]=useState(false)
    const showMenu =()=>{
    setMenu(!Menu)
    }
  return (
<>
    <nav className={`${Menu ? "BG" :""}`}>
        <div className="nav" >
        <label htmlFor="">No Name</label>
        <div className={`NavMenu ${Menu ? "show" : ""}`}>
        <ul>
        
            <li>
            <a href="#Services">
              Services
              </a>
              </li>
              
            <li>
            <a href="#About">
              About us
              </a></li>
            <li>
            <a href="#features">
              features
              </a></li>
            <li>
              <a href="#GetStarted">
                <span>
                <h4>Get Started</h4>
                <img src={Path}/>
                </span>
                </a>
            </li>
        </ul>
        </div>
        <a href="#GetStarted">
        <span className='get'>
        <h4>Get Started</h4>
        <img src={Path}/>
        </span>
        </a>
        <IoMenu className='MenuBar' onClick={showMenu} />
        </div>
        
    </nav>
    </>
  )
}
