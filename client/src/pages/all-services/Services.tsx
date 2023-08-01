import { useRef } from "react";
import { services } from "../../data/main-data";
import RegistarationForm from "../../components/registration-form/RegistarationForm";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import SectionTitle from "../../components/section-title/SectionTitle";
import "./Services.scss";

const Services = () => {

    const regForm = useRef<HTMLDivElement>(null);

    const bookAnAppointment = () => {
        regForm.current!.scrollIntoView(false);
    };

    return (
        <main className="services-page">

            <div className="services-introduction">
                <img className="backgroung-image" src="/images/services-section.png" alt="" />

                <section className="introduction">
                    <h1 className="introduction__title">Healthy pet - content pet and it's owner</h1>
                    <p className="introduction__text">You can book an appointment through our website.</p>
                    <button className="introduction__button" onClick={bookAnAppointment}>
                        <div className="introduction__button-image">
                            <img className="introduction__button-icon" src="/images/icons/book.png" alt="icon" title="book-icon" />
                        </div>
                         Book an appointment 
                    </button>
                </section>
            </div>

            <section className="services">
                <SectionTitle title="All our services" description="" />

                <div className="services__list">
                    {
                        services.map(item => <ServiceCard key={item._id} {...item} />)
                    }
                </div>
            </section>

            <RegistarationForm scrollTo={regForm} />
        </main>
    );
};

export default Services;