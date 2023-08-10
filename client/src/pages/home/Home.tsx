import { acivements, services, specialists } from "../../data/main-data";
import SpecialistCard from "../../components/cards/specialist-card/SpecialistCard";
import Achievement from "../../components/cards/achievement-card/Achievement";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import SectionTitle from "../../components/section-title/SectionTitle";
import RedirectLink from "./components/nav-link/RedirectLink";
import Discount from "./components/discount/Discount";
import "./Home.scss";
import Loader from "../../components/loader/Loader";



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
                        Request a call
                    </button>
                </section>
            </div>


            <Discount />

            <section className="services">
                <SectionTitle title="services" description="" />
                <div className="services__list">
                    {
                        services.slice(0,8).map(item => <ServiceCard key={item._id} {...item} />)
                    }
                </div>

                <RedirectLink text="See all" route="services" />
            </section>

            <div className="specialists-container">
                <section className="specialists">
                    <SectionTitle title="specialists" description="" />

                    <div className="specialists__list">
                        {
                            specialists.slice(0,6).map(item => <SpecialistCard key={item._id} {...item} />)
                        }
                    </div>

                    <RedirectLink text="See all" route="specialists" />
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
    );
};

export default Home; 