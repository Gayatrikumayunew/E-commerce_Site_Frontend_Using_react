import React from 'react'
import './Footer.css'
import footerimg from '../Assets/logo.png'
import insta from '../Assets/insta.png'
import pintr from '../Assets/pintrest.png'
import whatsapp from '../Assets/whatsapp.jpeg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footerimg} alt="" />
                <p>SHOPMOSE</p>

            </div>
            <ul className="footerlinks">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-icons">
                <div className="icons">
                    <img src={insta} alt="" />
                    </div>
                    <div className="icons">
                    <img src={pintr} alt="" />
                    </div>
                    <div className="icons">
                    <img src={whatsapp} alt="" />
                    </div>
                    
 
            </div>
            <div className="footer-copy">
                <hr />
                <p>Copyright @2024- All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
