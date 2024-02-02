import React from 'react'
import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa";
export default function Footer() {
  return (
    <><footer>
    <hr className='footerhr'/>
    <div className="footer">
        <label htmlFor="">No name</label>
        <p>Copyright <FaRegCopyright/> 2024 </p>
        <ul>
            <li>Services</li>
            <li>About</li>
            <li>Feedback</li>
            <li>contact</li>
        </ul>
        </div>
    </footer>
    </>
  )
}
