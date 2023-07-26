import Achievement from "../../components/cards/achievement-card/Achievement";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import SpecialistCard from "../../components/cards/specialist-card/SpecialistCard";
import SectionTitle from "../../components/section-title/SectionTitle";
import Discount from "./components/discount/Discount";
import specialists from "../../data/specialists";
import acivements from "../../data/acivements";
import services from "../../data/services";
import "./Home.scss";


const Home = () => {

    return (
        <main className="main">

            <div className="welcom-container">
                <img className="backgroung-image" src="/images/main-section.png" alt="" />

                <section className="welcom">
                    <h1 className="welcom__title">The health of your pet is in your hands</h1>
                    <p className="welcom__text">You can book an appointment through our website.</p>
                    <button className="welcom__button">
                        <div className="welcom__button-image">
                            <img className="welcom__button-icon" src="images/icons/phone.png" alt="icon" title="call-icon" />
                        </div>
                        <span>Request a call</span>
                    </button>
                </section>
            </div>


            <Discount />

            <section className="services">
                <SectionTitle title="services" description="" />
                <div className="services__list">
                    {
                        services.map(item => {
                            return (
                                <ServiceCard
                                    key={item._id}
                                    id={item._id}
                                    image={item.image}
                                    title={item.name}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </div>
            </section>

            <div className="specialists-container">
                <section className="specialists">
                    <SectionTitle title="specialists" description="" />
                    <div className="specialists__list">
                        {
                            specialists.map(item => {
                                return (
                                    <SpecialistCard
                                        key={item._id}
                                        photo={item.photo}
                                        experience={item.experience}
                                        specialisations={item.specialisations}
                                        name={item.name}
                                        description={item.description}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>

            <section className="achievements">
                <SectionTitle title="achievements" description="" />
                <div className="achievements__list">
                    {
                        acivements.map(item => {
                            return (
                                <Achievement
                                    key={item._id}
                                    icon={item.icon}
                                    title={item.title}
                                    color={item.color}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
};

export default Home;
