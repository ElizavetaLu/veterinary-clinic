import { Navigate, useLocation } from "react-router-dom";
import RegistarationForm from "../../components/registration-form/RegistarationForm";
import { IProcedure } from "../../interfaces";
import "./Service.scss";
import { useRef } from "react";
import ProceduresTable from "./procedures-table/ProceduresTable";


const Service = () => {

    const regForm = useRef<HTMLDivElement>(null);

    const bookAnAppointment = () => {
        regForm.current!.scrollIntoView(false)
    }

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
                            <img className="introduction__button-icon" src="/images/icons/book.png" alt="icon" title="call-icon" />
                        </div>
                        <span>Book an appointment</span>
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
            </section>

            <RegistarationForm service={title} scrollTo={regForm} />
        </main>
    );
};

export default Service;  