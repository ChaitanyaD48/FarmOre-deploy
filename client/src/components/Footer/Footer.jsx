import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
// import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">
                    About
                </div>
                <div className="text">Our team is passionate about leveraging technology to revolutionize the agricultural industry. Our goal is to develop innovative solutions that will address the challenges faced by farmers and contribute to the sustainable growth of the agro industry.</div>
            </div>
            <div className="col"><div className="title">
                    Contact
                </div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">987, FarmOre Pvt. Ltd., Daakho road, Soti.</div></div>
                    <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">+91 93425XXXXX</div></div>
                    <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">abcd12345@gmail.com
                    </div>
                    </div>
                    </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Fruits and Vegetables</span>
                <span className="text">Groceries</span>
                <span className="text">Seeds and Fertilizers</span>
                <span className="text">Farm Equipments</span>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Blog</span>
                {/* <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact us</span> */}
                </div>
        </div>
        <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
               2023 @FarmOre. All rights reserved.
            </div>
            {/* <img src={Payment} alt="" /> */}
        </div>
        </div>
    </footer>;
};

export default Footer;