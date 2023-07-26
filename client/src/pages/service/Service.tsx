import { Navigate, useLocation, useNavigate } from "react-router-dom";
import RegistarationForm from "../../components/registration-form/RegistarationForm";
import serviceFullData from "../../data/servicesFullData";
import "./Service.scss";

const Service = () => {

    const { state } = useLocation();
    const navigate = useNavigate()

    
    if(!state?.id) return <Navigate to="*" />

    const currentService = serviceFullData.find(service => service._id === state.id)
    

    return (
        <main className="service">

            <section className="introduction-container" style={{ backgroundImage: `url('/images/services/${currentService?.image}')` }}>
                <div className="introduction-container__brightness"></div>

                <div className="introduction">
                    <h1 className="introduction__title">{currentService?.name}</h1>
                    <button className="introduction__button">
                        <div className="introduction__button-image">
                            <img className="introduction__button-icon" src="/images/icons/book.png" alt="icon" title="call-icon" />
                        </div>
                        <span>Book an appointment</span>
                    </button>
                </div>
            </section>

            <section className="information">
                <p className="information__description">{currentService?.description}</p>

                <ul className="information__details">
                    {
                        currentService?.details.map((item, i) => {
                            return (
                                <li key={i} className="information__detail-item">
                                    <img className="information__detail-icon" src="/images/icons/paw.png" alt="paw" />
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="table">
                    <div className="table__header">
                        <div className="table__header-title">Procedure</div>
                        <div className="table__header-title table__small-cell">Cost (from)</div>
                        <div className="table__header-title table__small-cell">Minimum Time</div>
                    </div>

                    <div className="table__row">
                        <div className="table__row-cell">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vero.</div>
                        <div className="table__row-cell table__small-cell">$15</div>
                        <div className="table__row-cell table__small-cell">10 - 15 minutes</div>
                    </div>
                    <div className="table__row">
                        <div className="table__row-cell">Rabies Vaccination</div>
                        <div className="table__row-cell table__small-cell">$15</div>
                        <div className="table__row-cell table__small-cell">10 - 15 minutes</div>
                    </div>
                    <div className="table__row">
                        <div className="table__row-cell">Lorem ipsum dolor eos velit repellat illo voluptate quibusdam.</div>
                        <div className="table__row-cell table__small-cell">$15</div>
                        <div className="table__row-cell table__small-cell">10 - 15 minutes</div>
                    </div>
                    <div className="table__row">
                        <div className="table__row-cell">Rabies Vaccination</div>
                        <div className="table__row-cell table__small-cell">$15</div>
                        <div className="table__row-cell table__small-cell">10 - 15 minutes</div>
                    </div>
                </div>
            </section>

            <RegistarationForm service={currentService?.name} />
        </main>
    )
};

export default Service;