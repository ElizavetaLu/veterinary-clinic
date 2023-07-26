import { Link } from "react-router-dom";
import { IServiceCard } from "../../../interfaces";
import "./ServiceCard.scss";

const ServiceCard = ({ id, image, title, description }: IServiceCard) => {

    return (
        <Link className="service-card-link" to={`service/${title}`} state={{ id }}>
            <div className="service-card">
                <div className="service-card__image-container">
                    <img className="service-card__image" src={`/images/services/${image}`} alt="service" title="Service image" />
                </div>
                <p className="service-card__title">{title}</p>
                <p className="service-card__description">{description}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;