import { useState } from "react";
import { IRegistarationForm } from "../../interfaces";
import services from "../../data/services";
import CustomDateTimePicker from "../date-time-picker/CustomDateTimePicker";
import specialists from "../../data/specialists";
import Dropdown from "../dropdown/Dropdown";
import clinics from "../../data/clinics";
import Input from "../input/Input";
import "./RegistarationForm.scss";



const RegistarationForm = ({ service, specialistName, clinicAddress }: IRegistarationForm) => {

    const [isFirstVisit, setIsFirstVisit] = useState(true);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    // const [specialization, setSpecialization] = useState(service);
    // const [specialist, setSpecialist] = useState(specialistName);
    // const [address, setAddress] = useState(clinicAddress);
 
    const [clientCardNumber, setClientCardNumber] = useState('');
    const [petName, setPetName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    // const [sex, setSex] = useState('male');
    const [comment, setComment] = useState('');


    return (
        <div className="form-container">
            <form className="form" action="">
                <div className="form__header">
                    <h2 className="form__title">Registration form</h2>

                    <div className="switch">
                        <p className="switch__title">Have you ever been to our clinic before? </p>
                        <input
                            checked={!isFirstVisit}
                            onChange={() => setIsFirstVisit(!isFirstVisit)}
                            className="switch__input"
                            type="checkbox"
                            id="switch"
                        />
                        <label className="switch__label" htmlFor="switch">Toggle</label>
                    </div>
                </div>
                <div className="form__fields">
                    <div className="form__field-row">
                        <Input placeholder="Name" value={name} setValue={setName} />
                        <Input placeholder="Last Name" value={lastName} setValue={setLastName} />
                        <CustomDateTimePicker />
                    </div>

                    <div className="form__fields-columns">
                        <div className="form__block">
                            <Input placeholder="Phone Number" value={phoneNumber} setValue={setPhoneNumber} />
                            {isFirstVisit && <Input placeholder="Email" value={email} setValue={setEmail} />}
                            <Dropdown selected="Selected service" options={services} />
                            <Dropdown selected="Selected specialist" options={specialists} />
                            <Dropdown selected="Selected nearest clinic" options={clinics} />
                        </div>

                        <div className="form__block">
                            {isFirstVisit
                                ? <>
                                    <Input placeholder="Pet name" value={petName} setValue={setPetName} />
                                    <Input placeholder="Animal type" value={animalType} setValue={setAnimalType} />
                                    <Dropdown selected="Sex" options={[{ _id: '0', name: 'Male' }, { _id: '1', name: 'Female' }]} />
                                    <Input placeholder="Age" value={age} setValue={setAge} />
                                </>
                                : <Input placeholder="client card number" value={clientCardNumber} setValue={setClientCardNumber} />
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
