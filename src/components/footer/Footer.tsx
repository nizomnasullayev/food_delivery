import logo from "../../assets/Logo (2).png"
import socialMedia from "../../assets/Social Media.png"
import line from '../../assets/Line 2 (1).png'
import payment from '../../assets/Payment.png'

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <ul className="best-selling-buttons">
                    <li><img src={logo} alt="" /></li>
                    <li>Sophisticated simplicity for the independent mind</li>
                    <li><img src={socialMedia} alt="" /></li>
                </ul>
                <ul className="best-selling-buttons">
                    <p>Help & Information</p>
                    <img src={line} alt="" />
                    <li><a href="#">Pagination</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Home page</a></li>
                    <li><a href="#">Term of use</a></li>
                </ul>
                <ul className="best-selling-buttons">
                    <p>About Us</p>
                    <img src={line} alt="" />
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Address Store</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Receivers & Amplifiers</a></li>
                    <li><a href="#">Clothings</a></li>
                </ul> 
                <ul className="best-selling-buttons">
                    <p>Categories</p>
                    <img src={line} alt="" />
                    <li><a href="#">DelDelivery</a></li>
                    <li><a href="#">Legal Notice</a></li>
                    <li><a href="#">Documentatio</a></li>
                    <li><a href="#">Secure payment</a></li>
                    <li><a href="#">Stores</a></li>
                </ul>
            </div>
            <div className="wrapper">
                <p>© Copyright 2022 | Woodbar By Graphicraz.</p>
                <img src={payment}   alt="" />
            </div>
        </footer>
    )
}

export default Footer