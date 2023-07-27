import { Link } from "react-router-dom"; 
import LinksBlock from "./components/links-block/LinksBlock";
import Accordion from "./components/accordion/Accordion";
import Subscribe from "./components/subscribe/Subscribe";
import "./Footer.scss";
import { footerNavigation } from "../../data/navigation";


const Footer = () => {


    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer__data">
                    <div className="footer__cta">
                        <Link className="footer__logo-link" to="/">
                            <img className="footer__logo" src="/images/icons/logo-light.png" alt="logo" title="logo" />
                        </Link>

                        <Subscribe />
                    </div>

                    <div className="links">
                        {
                            footerNavigation.map(item => <LinksBlock key={item._id} {...item} />)
                        }
                    </div>


                    <Accordion />
                </div>

                <p className="footer__rights">All Rights Reserved Of Pet Doctor in 2023</p>
            </footer >
        </div >
    );
};

export default Footer;