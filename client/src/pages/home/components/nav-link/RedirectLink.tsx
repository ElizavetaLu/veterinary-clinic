import { Link } from "react-router-dom";
import { IRedirectLink } from "../../../../interfaces";
import "./RedirectLink.scss";

const RedirectLink = ({ text, route }: IRedirectLink) => {
    return (
        <div className="navigation-link">
            <Link to={route} className="navigation-link__text">{text}</Link>
        </div>
    );
};

export default RedirectLink;
