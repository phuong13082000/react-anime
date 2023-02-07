import {Link} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="page-up">
                    <ScrollToTop smooth />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer__logo">
                                <a href="/">
                                    <img src="http://localhost:3000/img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer__nav">
                                <ul>
                                    <li className="active"><Link to="/" >Homepage</Link></li>
                                    <li><Link to="/categories">Categories</Link></li>
                                    <li><Link to="/blog">Our Blog</Link></li>
                                    <li><Link to="/contact">Contacts</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p>Copyright © All rights reserved | This template is made with{" "}
                                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                                <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer