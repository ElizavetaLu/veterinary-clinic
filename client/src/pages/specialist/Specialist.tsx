import { useRef } from "react";
import RegistarationForm from "../../components/registration-form/RegistarationForm";
import { Navigate, useLocation } from "react-router-dom";
import "./Specialist.scss";
import { countExperienceAmount } from "../../helpers";
import SectionTitle from "../../components/section-title/SectionTitle";


const Specialist = () => {

    const regForm = useRef<HTMLDivElement>(null);

    const bookAnAppointment = () => {
        regForm.current!.scrollIntoView(false);
    };

    const { state } = useLocation();
    if (!state) return <Navigate to="*" />;

    const {
        images,
        name,
        specializations,
        about,
        experience,
        certificates
    } = state;

    return (
        <main className="specialist-page">
            <div className="specialist-introduction">

                <div className="background-block"></div>
                <img className="photo" src={`/images/specialists/${images.large}`} alt="" />

                <section className="introduction">
                    <div className="introduction__brief-info">
                        <h1 className="introduction__name">{name}</h1>
                        <h3 className="introduction__exp">{countExperienceAmount(experience)} of practical experience</h3>
                        <p className="introduction__text">{about}</p>

                        <div className="introduction__specializations">
                            {
                                specializations.map((item: any) => {

                                    return (
                                        <div key={item} className="introduction__specialization">
                                            <img className="introduction__specialization-icon" src="/images/icons/paw.png" alt="icon" />
                                            <span className="introduction__specialization-title">{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <button className="introduction__button" onClick={bookAnAppointment}>
                            <div className="introduction__button-image">
                                <img className="introduction__button-icon" src="/images/icons/book.png" alt="icon" title="book-icon" />
                            </div>
                            Book an appointment
                        </button>
                    </div>


                </section>
            </div>

            <section className="specialist">
            <div className="certificates">
                <SectionTitle title="certificates" description="" />
                    <div className="certificates__certificates-list">
                        {
                            certificates?.map((item: string, i: number) => {
                                return (
                                    <img key={i} className="certificates__certificate" src={`/images/${item}`} alt="certificate" />
                                )
                            })
                        }
                    </div>
            </div>

            </section>

            <RegistarationForm scrollTo={regForm} selectedSpecialist={state} />
        </main>
    );
};

export default Specialist