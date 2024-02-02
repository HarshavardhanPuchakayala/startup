import React from 'react'
import "./Services.css"
import IMG1 from "/assets/service1.png"
import IMG2 from "/assets/service2.png"
import IMG3 from "/assets/service3.png"
import cmp1 from "/assets/cmp1.png"
import cmp2 from "/assets/cmp2.png"
import cmp3 from "/assets/cmp3.png"
import cmp4 from "/assets/cmp4.png"
import cmp5 from "/assets/cmp5.png"
export default function Services() {
  return (
    <section className='ServicesSection'>
   <div className="Services">
    <div className="servicesTitle">
        <h1>Grow your startup with our Service</h1>
        <p>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
    </div>
    <div className="ServicesGrid">
        <div className="ServicesCard">
            <img src={IMG1}/>
            <div className="ServicesContent">
                <h1>Marketing & advertising</h1>
                <p>Get your info tests delivered at home collect a sample from the your pogress tests.</p>
            </div>
        </div>
        <div className="ServicesCard">
            <img src={IMG2}/>
            <div className="ServicesContent">
                <h1>Ultimate development</h1>
                <p>Get your info tests delivered at home collect a sample from the your pogress tests.</p>
            </div>
        </div>
        <div className="ServicesCard">
            <img src={IMG3}/>
            <div className="ServicesContent">
                <h1>Business Enterprise</h1>
                <p>Get your info tests delivered at home collect a sample from the your pogress tests.</p>
            </div>
        </div>
    </div>
    </div>
    <div className="qoute">
        <q>Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.</q>
        <p>By Denny Albuz,Adviser of Paypal</p>
    </div>
    <hr className="dividor"/>
    <div className='companys'>
        <img src={cmp1}  className="cmp" />
        <img src={cmp2}  className="cmp" />
        <img src={cmp3}  className="cmp" />
        <img src={cmp4}  className="cmp" />
        <img src={cmp5}  className="cmp" />
    </div>
   </section>
  )
}
