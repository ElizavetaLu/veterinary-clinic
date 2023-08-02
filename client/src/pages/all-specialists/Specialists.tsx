import { useRef } from "react";
import SpecialistCard from "../../components/cards/specialist-card/SpecialistCard";
import { specialists } from "../../data/main-data";
import RegistarationForm from "../../components/registration-form/RegistarationForm";
import SectionTitle from "../../components/section-title/SectionTitle";
import "./Specialists.scss";

const Specialists = () => {

    const regForm = useRef<HTMLDivElement>(null);

    const bookAnAppointment = () => {
        regForm.current!.scrollIntoView(false);
    };

    return (
        <main className="specialists-page">

            <div className="specialists-introduction">
                <img className="backgroung-image" src="/images/specialists-section.png" alt="" />

                <section className="introduction">
                    <h1 className="introduction__title">Team of professionals. Skillful doctor - happy patient! </h1>
                    <p className="introduction__text">You can book an appointment through our website.</p>
                    <button className="introduction__button" onClick={bookAnAppointment}>
                        <div className="introduction__button-image">
                            <img className="introduction__button-icon" src="/images/icons/book.png" alt="icon" title="book-icon" />
                        </div>
                        Book an appointment
                    </button>
                </section>
            </div>

            <section className="specialists">
                <SectionTitle title="Meet our specialists" description="" />

                <div className="specialists__list">
                    {
                        specialists.map(item => <SpecialistCard key={item._id} {...item} />)
                    }
                </div>
            </section>

            <RegistarationForm scrollTo={regForm} />
        </main>
    );
};

export default Specialists;