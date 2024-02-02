import React from 'react'
import "./Model.css"
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Model() {
  return (
    <section className='ModelSection'>
        <div className="ModelContent">
            <h1>We Will turn your idea in the successful business model framework 😇</h1>
            <p>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
            <ul className='ModelUl'>
              <li>Medical and vision</li>
              <li>HSAs and FSAs</li>
              <li>Life insurance</li>
              <li>Commuter benefits</li>
            </ul>
            <a href=""><p className='Explore'>Explore more <MdKeyboardArrowRight/></p></a>
        </div>
        <img src="/assets/illustration.png" alt="" className='Modelimg'/>
    </section>
  )
}
