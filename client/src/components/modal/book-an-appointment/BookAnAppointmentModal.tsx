import { useState } from "react";
import CustomDateTimePicker from "../../date-time-picker/CustomDateTimePicker";
import { clinics, services, sex, specialists } from "../../../data/main-data";
import useToggle from "../../../hooks/useToggle";
import Dropdown from "../../dropdown/Dropdown";
import Switcher from "../../switcher/Switcher";
import Input from "../../input/Input";
import "./BookAnAppointmentModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { showModal, showPopup } from "../../../store/actions/actionCreators";


const appointmentSteps = ['personal information', 'pet information', 'appointment details'];


const BookAnAppointmentModal = () => {


    const { isShown } = useSelector((state: any) => state.modal);
    const dispatch = useDispatch();

    const [isActive, toggle] = useToggle();
    const [currentStep, setCurrentStep] = useState('personal information');


    const [isFirstVisit, setIsFirstVisit] = useState(true);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState(null);
    const [specialist, setSpecialist] = useState(null);
    const [clinicAddress, setClinicAddress] = useState(null);

    const [clientCardNumber, setClientCardNumber] = useState('');
    const [petName, setPetName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [animalSex, setAnimalSex] = useState(null);
    const [comment, setComment] = useState('');

    const [errorOccurred, setErrorOccurred] = useState(false)


    const onPersonalInfoFill = () => {
        if (errorOccurred) setErrorOccurred(!errorOccurred);
        if (!name.trim() || !lastName.trim() || !phoneNumber.trim()) return setErrorOccurred(true);

        setCurrentStep('pet information');
    };

    const onPetInfoFill = () => {
        if (errorOccurred) setErrorOccurred(!errorOccurred);
        if (isFirstVisit && (!petName.trim() || !animalType.trim() || !animalSex)) return setErrorOccurred(true);
        if (!isFirstVisit && !clientCardNumber.trim()) return setErrorOccurred(true);

        setCurrentStep('appointment details');
    };

    const onSend = () => {
        if (!service || !clinicAddress) return setErrorOccurred(true);

        setName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setService(null);
        setSpecialist(null);
        setClinicAddress(null);
        setClientCardNumber('');
        setPetName('');
        setAnimalType('');
        setAge('');
        setAnimalSex(null);
        setComment('');

        dispatch(showModal());
        dispatch(showPopup('Thank you for the request, we will contact you soon!'));
    };


    return (
        <div className={`modal-wrapper ${isShown && 'modal-wrapper--active'}`} onClick={() => dispatch(showModal())}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={() => dispatch(showModal())}>
                    <img className="modal__close-icon" src="/images/icons/cross.png" alt="close" />
                </button>

                <ul className="modal__appointment-options">
                    {
                        appointmentSteps.map(item => {
                            return (
                                <li
                                    key={item}
                                    className={`modal__appointment-option ${currentStep === item && 'modal__appointment-option--active'}`}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="modal__data">

                    {errorOccurred && <p className="modal__data-error">Please fill all fields</p>}

                    {
                        currentStep === 'personal information' &&
                        <>
                            <div className="modal__data-switcher">
                                <Switcher isActive={isFirstVisit} setIsActive={setIsFirstVisit} />
                            </div>
                            <Input placeholder="Name" value={name} setValue={setName} required />
                            <Input placeholder="Last Name" value={lastName} setValue={setLastName} required />
                            <Input placeholder="Phone Number" value={phoneNumber} setValue={setPhoneNumber} required />
                            {isFirstVisit && <Input placeholder="Email (optional)" value={email} setValue={setEmail} />}
                            <div className="modal__data-buttons">
                                <button className="modal__data-button" onClick={onPersonalInfoFill}>Next</button>
                            </div>
                        </>
                    }

                    {
                        currentStep === 'pet information' &&
                        <>
                            {
                                isFirstVisit
                                    ? <>
                                        <Input placeholder="Pet name" value={petName} setValue={setPetName} required />
                                        <Input placeholder="Animal type" value={animalType} setValue={setAnimalType} required />
                                        <Dropdown value={animalSex} setValue={setAnimalSex} options={sex} placeholder="Select sex" />
                                        <Input placeholder="Age (optional)" value={age} setValue={setAge} />
                                    </>
                                    : <Input placeholder="client card number" value={clientCardNumber} setValue={setClientCardNumber} required />
                            }
                            <div className="modal__data-buttons">
                                <button className="modal__data-button" onClick={() => {
                                    if (errorOccurred) setErrorOccurred(!errorOccurred);
                                    setCurrentStep('personal information');
                                }}>Back</button>
                                <button className="modal__data-button" onClick={onPetInfoFill}>Next</button>
                            </div>
                        </>
                    }
                    {
                        currentStep === 'appointment details' &&
                        <>
                            <CustomDateTimePicker />
                            <Dropdown value={service} setValue={setService} options={services} placeholder="Select service" />
                            <Dropdown value={specialist} setValue={setSpecialist} options={specialists} placeholder="Select specialist" />
                            <Dropdown value={clinicAddress} setValue={setClinicAddress} options={clinics} placeholder="Select nearest clinic" />
                            <Input placeholder="Comment (optional)" value={comment} setValue={setComment} />

                            <div className="modal__data-buttons">
                                <button className="modal__data-button" onClick={() => {
                                    if (errorOccurred) setErrorOccurred(!errorOccurred);
                                    setCurrentStep('pet information');
                                }}>Back</button>
                                <button className="modal__data-button" onClick={onSend}>Book an Appointment</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div >
    );
};

export default BookAnAppointmentModal;