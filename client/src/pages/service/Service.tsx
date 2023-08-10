import { useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import RegistarationForm from "../../components/registration-form/RegistarationForm";
import ProceduresTable from "./procedures-table/ProceduresTable";
import "./Service.scss";


const Service = () => {

    const regForm = useRef<HTMLDivElement>(null);

    const bookAnAppointment = () => {
        regForm.current!.scrollIntoView(false);
    };

    const { state } = useLocation();
    if (!state) return <Navigate to="*" />;

    const { images, title, about, additionalInfo, procedures } = state;

    return (
        <main className="service">
            <section className="introduction-container" style={{ backgroundImage: `url('/images/services/${images?.large}')` }}>
                <div className="introduction-container__light-gradient"></div>
                <div className="introduction-container__brightness"></div>

                <div className="introduction">
                    <h1 className="introduction__title">{title}</h1>
                    <button className="introduction__button" onClick={bookAnAppointment}>
                        <div className="introduction__button-image">
                            <img className="introduction__button-icon" src="/images/icons/book.png" alt="icon" title="book-icon" />
                        </div>
                        Book an appointment
                    </button>
                </div>
            </section>

            <section className="information">
                <p className="information__description">{about}</p>

                <ul className="information__details">
                    {
                        additionalInfo?.map((item: string, i: number) => {
                            return (
                                <li key={i} className="information__detail-item">
                                    <img className="information__detail-icon" src="/images/icons/paw.png" alt="paw" />
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

                <ProceduresTable list={procedures} />

                <p className="information__warning">
                    Again, please remember that these are approximate costs and times and can vary. It's essential to consult with a veterinarian for a specific quote and to discuss the best treatment options for your pet's individual needs.
                </p>
            </section>

            <RegistarationForm selectedService={state} scrollTo={regForm} />
        </main>
    );
};

export default Service;  