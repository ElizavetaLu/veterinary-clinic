import { Link } from "react-router-dom";
import { ISpecialist } from "../../../interfaces";
import "./SpecialistCard.scss";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/actions/actionCreators";

const date = new Date()

const SpecialistCard = (props: ISpecialist) => {

    const {
        images,
        name,
        specializations,
        about,
        experience
    } = props;

    //count specialist's experience from now and set correct "year" form
    const startWorking = new Date(experience);
    const specExp = Math.abs(date.getFullYear() - startWorking.getFullYear());
    const correspondingWordEnding = specExp === 1 ? 'year' : 'years';

    const dispatch = useDispatch();


    return (
        <div className="specialist-card">
            <div className="specialist-card__image-container">
                <img className="specialist-card__image" src={`/images/specialists/${images?.small}`} alt="specialist" title="specialist" />
            </div>
            <div className="specialist-card__data">
                <p className="experience">exp. <span className="experience__amount">{specExp} {correspondingWordEnding}</span></p>
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
                    <button className="specialist-card__button" onClick={()=>dispatch(showModal())}>Book</button>
                    <Link className="specialist-card__link" to="">learn more</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialistCard