import { Link } from "react-router-dom";
import { acivements, services, specialists } from "../../data/main-data";
import SpecialistCard from "../../components/cards/specialist-card/SpecialistCard";
import Achievement from "../../components/cards/achievement-card/Achievement";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import SectionTitle from "../../components/section-title/SectionTitle";
import Discount from "./components/discount/Discount"; 
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
                        services.map(item => <ServiceCard key={item._id} {...item} />)
                    }
                </div>
            </section>

            <div className="specialists-container">
                <section className="specialists">
                    <SectionTitle title="specialists" description="" />

                    <div className="specialists__list">
                        {
                            specialists.map(item => <SpecialistCard key={item._id} {...item} />)
                        }
                    </div>

                    <div className="specialists__link-container">
                        <Link to="" className="specialists__link">See all</Link>
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
    );
};

export default Home;





git add public/images/services/service3.png
git add public/images/services/service5.png
git add public/images/services/service7.png
git add public/images/specialists/specialist1.png
git add public/images/specialists/specialist2.png

git add src/components/cards/service-card/ServiceCard.tsx
git add src/components/cards/specialist-card/SpecialistCard.scss
git add src/components/cards/specialist-card/SpecialistCard.tsx
 
git add src/components/registration-form/RegistarationForm.tsx
 

git add src/pages/contacts/Contacts.tsx
git add src/pages/contacts/components/map/Map.tsx
git add src/pages/home/Home.scss
git add src/pages/home/Home.tsx
git add src/pages/home/components/discount/Discount.scss
git add src/pages/home/components/discount/Discount.tsx
git add src/pages/service/Service.scss
git add src/pages/service/Service.tsx

 
git add public/images/services/service-large5.jpg
git add public/images/services/service-large6.jpg
git add public/images/services/service-large7.jpg
git add public/images/services/service-large9.jpg
git add public/images/services/service3.jpg
git add public/images/services/service5.jpg
git add public/images/services/service7.jpg
git add public/images/specialists/specialist4.png
git add public/images/specialists/specialist5.png
git add public/images/specialists/specialist6.png
git add public/images/specialists/specialist7.png


