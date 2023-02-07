import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo" onClick={() => navigate("/")}>
                                <img src="http://localhost:3000/img/logo.png" alt="logo"/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header__nav">
                                <nav className="header__menu mobile-menu">
                                    <ul>
                                        <li className="active"><Link to="/">HomePage</Link></li>
                                        <li>
                                            <Link to="/categories">Categories <span className="arrow_carrot-down"/></Link>
                                            <ul className="dropdown">
                                                <li><Link to="/categories">Categories</Link></li>
                                                <li><Link to="/anime-details">Anime Details</Link></li>
                                                <li><Link to="/anime-watching">Anime Watching</Link></li>
                                                <li><Link to="/blog-details">Blog Details</Link></li>
                                                <li><Link to="/register">Sign Up</Link></li>
                                                <li><Link to="/login">Login</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/blog">Our Blog</Link></li>
                                        <li><Link to="#">Contacts</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="header__right">
                                <Link to="#" className="search-switch"><span className="icon_search"/></Link>
                                <Link to="/login"><span className="icon_profile"/></Link>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"/>
                </div>
            </header>

            <div id="preloder">
                <div className="loader"/>
            </div>
        </>
    )
}

export default Header