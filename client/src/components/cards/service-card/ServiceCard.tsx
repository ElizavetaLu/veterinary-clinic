import { Link } from "react-router-dom";
import { IService } from "../../../interfaces";
import "./ServiceCard.scss";

const ServiceCard = (props: IService) => {

    const { images, title, description } = props; 

    return (
        <Link className="service-card-link" to={`/services/${title}`} state={props} >
            <div className="service-card">
                <div
                    className="service-card__image-container"
                    style={{ backgroundImage: `url("/images/services/${images.small}")` }}
                ></div>
                <p className="service-card__title">{title}</p>
                <p className="service-card__description">{description.slice(0, 55)}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;