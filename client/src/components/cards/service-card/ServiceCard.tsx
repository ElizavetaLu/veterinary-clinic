import { Link } from "react-router-dom";
import { IService } from "../../../interfaces";
import "./ServiceCard.scss";

const ServiceCard = (props: IService) => {

    const { images, title, description } = props;

    return (
        <Link className="service-card-link" to={`service/${title}`} state={props}>
            <div className="service-card">
                <div className="service-card__image-container">
                    <img className="service-card__image" src={`/images/services/${images.small}`} alt="service" title="Service image" />
                </div>
                <p className="service-card__title">{title}</p>
                <p className="service-card__description">{description}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;