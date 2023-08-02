import { FormEventHandler, useState } from "react";
import { IRegistarationForm } from "../../interfaces";
import CustomDateTimePicker from "../date-time-picker/CustomDateTimePicker";
import { clinics, services, sex, specialists } from "../../data/main-data";
import Dropdown from "../dropdown/Dropdown";
import Switcher from "../switcher/Switcher";
import Input from "../input/Input";
import "./RegistarationForm.scss";



const RegistarationForm = ({ selectedService, selectedSpecialist, scrollTo }: IRegistarationForm) => {

    const [isFirstVisit, setIsFirstVisit] = useState(true);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState(selectedService);
    const [specialist, setSpecialist] = useState(selectedSpecialist);
    const [clinicAddress, setClinicAddress] = useState(null);

    const [clientCardNumber, setClientCardNumber] = useState('');
    const [petName, setPetName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [animalSex, setAnimalSex] = useState(null);
    const [comment, setComment] = useState('');

    const onSend: FormEventHandler = e => {
        e.preventDefault();
        if (!name.trim()) return;
    }


    return (
        <div className="form-container" ref={scrollTo}>
            <form className="form" onSubmit={onSend}>
                <div className="form__header">
                    <h2 className="form__title">Registration form</h2>

                    <Switcher isActive={isFirstVisit} setIsActive={setIsFirstVisit} />
                </div>
                <div className="form__fields">

                    <div className="form__field-row-mobile">
                        <div className="form__date-picker-mobile">
                            <CustomDateTimePicker />
                        </div>
                    </div>

                    <div className="form__field-row">
                        <Input placeholder="Name" value={name} setValue={setName} required />
                        <Input placeholder="Last Name" value={lastName} setValue={setLastName} required />
                        <div className="form__date-picker">
                            <CustomDateTimePicker />
                        </div>
                    </div>

                    <div className="form__fields-columns">
                        <div className="form__block">
                            <Input placeholder="Phone Number" value={phoneNumber} setValue={setPhoneNumber} required />
                            {isFirstVisit && <Input placeholder="Email (optional)" value={email} setValue={setEmail} />}
                            <Dropdown value={service} setValue={setService} options={services} placeholder="Select service" />
                            <Dropdown value={specialist} setValue={setSpecialist} options={specialists} placeholder="Select specialist" />
                            <Dropdown value={clinicAddress} setValue={setClinicAddress} options={clinics} placeholder="Select nearest clinic" />
                        </div>

                        <div className="form__block">
                            {isFirstVisit
                                ? <>
                                    <Input placeholder="Pet name" value={petName} setValue={setPetName} required />
                                    <Input placeholder="Animal type" value={animalType} setValue={setAnimalType} required />
                                    <Dropdown value={animalSex} setValue={setAnimalSex} options={sex} placeholder="Select sex" />
                                    <Input placeholder="Age" value={age} setValue={setAge} />
                                </>
                                : <Input placeholder="client card number" value={clientCardNumber} setValue={setClientCardNumber} required />
                            }
                            <Input placeholder="Comment" value={comment} setValue={setComment} />
                        </div>
                    </div>
                </div>

                <div className="form__send">
                    <button className="form__send-button">Send</button>
                </div>
            </form>
        </div>
    );
};

export default RegistarationForm;
