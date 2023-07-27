import { Link } from "react-router-dom";
import "./Discount.scss";

const Discount = () => {

    return (
        <section className="discount">
            <div className="discount__conditions">
                <p className="discount__text">Every wednesday -10% on professional dental hygiene by appointment</p>
                <div className="discount__cta">
                    <button className="discount__button">Book an appointment</button>
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