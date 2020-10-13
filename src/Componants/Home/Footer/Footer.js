import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div id="Footer" className="container">
            <div className="footer row">
                <div className="col-md-6 footerLeft">

                    <h2>Let us handle your project, professionally.</h2>

                    <p className="mt-5">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 footerRight">
                    <form action="">
                        <input type="email" placeholder="Your email address" name="" id="" required />
                        <input type="text" name="" id="" placeholder="Your name / company’s name" required />
                        <textarea placeholder="Your message" name="" id="" cols="30" rows="5" required></textarea>
                        <input className="btn btn-dark footerSendBtn" type="submit" value="send" />
                    </form>
                </div>
                <div className="footerCopyright">
                    <p>© copyright Orange labs <span>{new Date().getFullYear()} by "Abir Hasan"</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;