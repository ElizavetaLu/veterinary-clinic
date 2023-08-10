import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/actions/actionCreators";
import { countExperienceAmount } from "../../../helpers";
import { ISpecialist } from "../../../interfaces";
import "./SpecialistCard.scss";


const SpecialistCard = (props: ISpecialist) => {

    const {
        images,
        name,
        specializations,
        about,
        experience
    } = props;


    const dispatch = useDispatch();


    return (
        <div className="specialist-card">
            <div className="specialist-card__image-container">
                <img className="specialist-card__image" src={`/images/specialists/${images?.small}`} alt="specialist" title="specialist" />
            </div>
            <div className="specialist-card__data">
                <p className="experience">exp. <span className="experience__amount">{countExperienceAmount(experience)}</span></p>
                <p className="specialist-card__name">{name}</p>
                <div className="specialist-card__specialisation-list">
                    {
                        specializations?.map((item, i) => {
                            return (
                                <div key={item} className="specialist-card__specialisation">
                                    <span className="specialist-card__specialisation-name" >
                                        {item}
                                    </span>
                                    {i !== specializations.length - 1 && <div className="specialist-card__separator"></div>}
                                </div>
                            )
                        })
                    }
                </div>
                <p className="specialist-card__description">{about.slice(0, 55)}...</p>
                <div className="specialist-card__cta">
                    <button className="specialist-card__button" onClick={() => dispatch(showModal())}>Book</button>

                    <Link className="specialist-card__link" to={`/specialists/${name}`} state={props}>learn more</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialistCard