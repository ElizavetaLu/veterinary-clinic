import { Link } from "react-router-dom";
import { ILinksBlock } from "../../../../interfaces";
import "./LinksBlock.scss";

const LinksBlock = ({ title, nav }: ILinksBlock) => {

    return (
        <div className="block">
            <p className="block__title">{title}</p>
            <ul className="block__list">
                {
                    nav.map(item => {
                        return (
                            <li key={item.name} className="block__item">
                                {
                                    item.icon && <img className="block__icon" src={`/images/icons/${item.icon}`} alt="" />
                                }
                                <Link className="block__link" to="">{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default LinksBlock;