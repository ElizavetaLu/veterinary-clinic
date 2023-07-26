import { Link } from "react-router-dom";
import { ISpecialistCard } from "../../../interfaces";
import "./SpecialistCard.scss";

const SpecialistCard = ({ photo, experience, specialisations, name, description }: ISpecialistCard) => {

    return (
        <div className="specialist-card">
            <div className="specialist-card__image-container">
                <img className="specialist-card__image" src={`/images/specialists/${photo}`} alt="specialist" title="specialist" />
            </div>
            <div className="specialist-card__data">
                <p className="experience">exp. <span className="experience__amount">{experience} year</span></p>
                <p className="specialist-card__name">{name}</p>
                <div className="specialist-card__specialisation-list">
                    {
                        specialisations.map(item => {
                            return (
                                <span
                                    key={item}
                                    className="specialist-card__specialisation"
                                >
                                    {item}
                                </span>
                            )
                        })
                    } 
                </div>
                <p className="specialist-card__description">{description}</p>
                <div className="specialist-card__cta">
                    <button className="specialist-card__button">Book</button>
                    <Link className="specialist-card__link" to="">learn more</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialistCard