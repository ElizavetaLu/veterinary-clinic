import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import "./Header.scss";



const Header = () => {

    const [isHidden, toogle] = useToggle();

    return (
        <div className="header-container ">
            <header className="header">
                <Link to="/" className="header__logo-link">
                    <img className="header__logo" src="/images/icons/logo.png" alt="logo" title="logo" />
                </Link> 
                <>
                    <button className="menu" onClick={toogle}>
                        <span className="menu__text">menu</span>
                        <img className="menu__icon" src="/images/icons/menu.png" alt="menu" title="menu" />
                        <img className="menu__icon-mobile" src="/images/icons/burger.png" alt="menu" title="menu" />
                    </button>

                        <nav className={`navigation ${isHidden ? 'navigation--show' : 'navigation--hide'}`}>
                            <button className="navigation__close" onClick={toogle}>
                                <span className="navigation__close-text">close</span>
                                <img className="navigation__close-icon" src="/images/icons/cross.png" alt="close" title="close" />
                            </button>
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    <Link to="" className="navigation__item-link">Home</Link>
                                </li>
                                <li className="navigation__item">
                                    <Link to="" className="navigation__item-link">About</Link>
                                </li>
                                <li className="navigation__item">
                                    <Link to="" className="navigation__item-link">Projects</Link>
                                </li>
                                <li className="navigation__item">
                                    <Link to="" className="navigation__item-link">Contact</Link>
                                </li>
                            </ul>
                        </nav> 

                </>

                <button className="header__button">Request a call</button>
            </header>
        </div >
    )
};

export default Header;