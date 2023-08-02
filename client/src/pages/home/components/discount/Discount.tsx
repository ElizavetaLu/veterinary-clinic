import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../store/actions/actionCreators";
import "./Discount.scss";


const Discount = () => {

    const dispatch = useDispatch();

    return (
        <section className="discount">
            <div className="discount__conditions">
                <p className="discount__text">Every wednesday -10% on professional dental hygiene by online appointment</p>
                <div className="discount__cta">
                    <button className="discount__button" onClick={()=>dispatch(showModal())}>Book an appointment</button>
                    <Link className="discount__link" to="">learn more</Link>
                </div>
            </div>
            <div className="discpunt__image-container">
                <img className="discount__image" src="/images/discount-section.png" alt="dog" title="dog" />
            </div>
        </section>
    );
};

export default Discount;