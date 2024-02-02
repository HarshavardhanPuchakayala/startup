import React from 'react'
import "./Feedback.css"
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Feedback() {
  return (
    <section className="FeedbackSection">
      <div className="Feedbackdiv">
        <img src="/assets/Feedback.png" alt="Customers" />
        <div className="FeedbackContent">
            <h1>We have more than thousand of worldwide happy customers 😄</h1>
            <p>no name helps our customers bring there business idea to life and start there dream business with us.</p>
            <a href=""><p className='Explore'>Learn more <MdKeyboardArrowRight/></p></a>
        </div>
        </div>
    </section>
  )
}
