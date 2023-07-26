import { useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "../../../../hooks/useToggle";
import footerNavigation from "../../../../data/footerNavigation";
import "./Accordion.scss";


const Accordion = () => {

    const [expanded, setExpanded] = useState('');
    const [isActive, toggle] = useToggle();

    return (
        <ul className="accordion">
            {
                footerNavigation.map((item) => (
                    <li key={item._id} className="accordion__item">
                        <div className="accordion__toggle" onClick={() => {
                            setExpanded(item.title);
                            toggle();
                        }}>
                            <h3 className="accordion__title">{item.title}</h3>
                            <img className={`accordion__vector ${isActive && (expanded === item.title) && 'accordion__vector--active'}`} src="/images/icons/vector-white.png" alt="vectorF" />
                        </div>

                        {
                            isActive && (expanded === item.title) &&
                            <ul className="accordion__content">
                                {
                                    item.nav.map(item => {
                                        return (
                                            <li key={item.name} className="accordion__link-container">
                                                {
                                                    item.icon && <img className="accordion__icon" src={`/images/icons/${item.icon}`} alt="" />
                                                }
                                                <Link className="accordion__link" to="">{item.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </li>
                ))
            }
        </ul>
    );
};

export default Accordion