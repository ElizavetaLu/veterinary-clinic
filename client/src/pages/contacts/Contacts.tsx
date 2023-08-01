import { useState } from "react";
import { clinics } from "../../data/main-data";
import Map from "./components/map/Map";
import "./Contacts.scss";


const Contacts = () => {

    const [currentClinic, setCurrentClinic] = useState({
        lat: 52.13113,
        lng: -0.4735884
    })

    return (
        <main className="contacts">
            <div className="contacts__data">
                <h2 className="contacts__title">Contacts</h2>
                <ul className="contacts__list">
                    <li className="contacts__item">
                        <img className="contacts__item-icon" src="/images/icons/phone.png" alt="phone" />
                        + 38(055) 675 7647
                    </li>
                    <li className="contacts__item">
                        <img className="contacts__item-icon" src="/images/icons/email.png" alt="phone" />
                        email@example.com
                    </li>
                    <li className="contacts__item contacts__item--withList">
                        <div className="contacts__item">
                            <img className="contacts__item-icon" src="/images/icons/location.png" alt="phone" />
                            Our clinics:
                        </div>

                        <ul className="contacts__nested-list">
                            {
                                clinics.map(item => {

                                    const markerLocation = {
                                        lat: item.location.latitude,
                                        lng: item.location.longitude
                                    }

                                    return (
                                        <li
                                            key={item._id}
                                            className="contacts__nested-item"
                                            onClick={() => setCurrentClinic(markerLocation)}
                                        >
                                            {item.address}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="contacts__map">
                <Map currentClinic={currentClinic} setCurrentClinic={setCurrentClinic} />
            </div>
        </main>
    );
};

export default Contacts;