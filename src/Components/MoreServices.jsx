import React from 'react'
import "./MoreServices.css"
import { SiThreedotjs } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FiLink } from "react-icons/fi";
import { FaPencilRuler } from "react-icons/fa";
import { MdKeyboardArrowRight,MdOutlinePhone,MdOutlineWeb } from "react-icons/md";
export default function MoreServices() {
  return (
    <>
    <section className="MoreServicesSection">
    <div className="MoreservicesHeading">
        <h1>Other services you must appreciate</h1>
        <p>We offer way more services than you expect which can help you to make your idea in to a life.</p>
    </div>
    <div className="MoreServicesGrid">
        <div className="MoreServiceCard">
            <div className="CardImg">
            <span className='IconBg three'>
                <SiThreedotjs className='icon'/>
            </span>
            </div>
            <div className="MoreServiceContent">
                <h1>
                    3D Websites
                </h1>
                <p>
                    3D web sites are future of all the companies and business with help of three.js. we can develop more futurestic webpages.
                </p>
                <a href=""><p className='Explore'>Learn more <MdKeyboardArrowRight/></p></a>
            </div>
        </div>
        <div className="MoreServiceCard">
            <div className="CardImg">
            <span className='IconBg Dg'>
                <FiLink className='icon'/>
            </span>
            </div>
            <div className="MoreServiceContent">
                <h1>
                    Digital promotion
                </h1>
                <p>
                    We also provide digital promotion for your business . Helps in development and improving of your work.
                </p>
                <a href=""><p className='Explore'>Learn more <MdKeyboardArrowRight/></p></a>
            </div>
        </div>
        <div className="MoreServiceCard">
            <div className="CardImg">
            <span className='IconBg ui'>
                <FaPencilRuler className='icon'/>
            </span>
            </div>
            <div className="MoreServiceContent">
                <h1>
                    UI Design
                </h1>
                <p>
                    Our Team has a way creative Ui designers who can create a latest ui designs and uniquie web pages . Who can convert your idea in to a web page.
                </p>
                <a href=""><p className='Explore'>Learn more <MdKeyboardArrowRight/></p></a>
            </div>
        </div>
        <div className="MoreServiceCard">
            <div className="CardImg">
            <span className='IconBg web'>
                <MdOutlineWeb className='icon'/>
            </span>
            </div>
            <div className="MoreServiceContent">
                <h1>
                    Web Development
                </h1>
                <p>
                    We have a Great team who have a way best knowledge and hands on experience on developing web applications using ReactJs and AngularJs.
                </p>
                <a href=""><p className='Explore'>Learn more <MdKeyboardArrowRight/></p></a>
            </div>
        </div>
        <div className="MoreServiceCard">
            <div className="CardImg">
            <span className='IconBg app'>
                <RiFlutterFill className='icon'/>
            </span>
            </div>
            <div className="MoreServiceContent">
                <h1>
                    Mobile Development
                </h1>
                <p>
                    Mobile apps developed with latest technologies like flutter will provide better user interface apps for users.
                </p>
                <a href=""><p className='Explore'>Learn more <MdKeyboardArrowRight/></p></a>
            </div>
        </div>
        <div className="MoreServiceCard">
            <div className="CardImg">
            <span className='IconBg customer'>
                <MdOutlinePhone className='icon'/>
            </span>
            </div>
            <div className="MoreServiceContent">
                <h1>
                    24/7 customer support
                </h1>
                <p>
                    We provide 24/7 customer support to our clients and the products we provide.
                </p>
                <a href=""><p className='Explore'>Learn more <MdKeyboardArrowRight/></p></a>
            </div>
        </div>

    </div>
    </section>
    </>
  )
}
