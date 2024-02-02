import React from 'react'
import "./Subscribe.css"
export default function Subscribe() {
  return (
    <>
    <section className="SubscribeSection">
        <div className="SubscribeCard">
            <div className="SubscribeContent">
                <h1>Start your Business with us.</h1>
                <p>We have more than thousand of creative entrepreneurs and start joining our business. Subscribe now our team will get back to you.</p>
            </div>
            <form className="SubscribeMail">
            <input type="email" name="mail" id="email" placeholder='Enter Email address' required/>
            <button className='subscribeBtn'>Subscribe</button>
            </form>
        </div>
    </section>
    </>
  )
}
