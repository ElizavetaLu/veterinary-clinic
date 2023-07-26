import { Link } from "react-router-dom";
import "./NoMatch.scss";

const NoMatch = () => {
    return (
        <div className="no-match">
            <div className="no-match__info">
                <h1 className="no-match__error-code">404</h1>
                <h3 className="no-match__error-text">Page not found</h3>
                <Link className="no-match__link" to="/">Go Back Home</Link>
            </div>
        </div>
    )
};

export default NoMatch;