import { Link } from "react-router-dom";
import { headerNavigation } from "../../data/navigation";
import useToggle from "../../hooks/useToggle";
import "./Header.scss";
 

const Header = () => {

    const [isHidden, toogle] = useToggle();

    return (
        <div className="header-container">
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
                            {
                                headerNavigation.map(item => {
                                    return (
                                        <li key={item._id} className="navigation__item" onClick={toogle}>
                                            <Link to={item.route} className="navigation__item-link">{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </>

                <button className="header__button">Request a call</button>
            </header>
        </div >
    );
};

export default Header; 