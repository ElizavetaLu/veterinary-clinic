import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import "./CustomDateTimePicker.scss";


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomDateTimePicker = () => {

    const [value, onChange] = useState<Value>(new Date());
    
    return (
        <DateTimePicker
            onChange={onChange}
            value={value}
            calendarIcon={
                <img
                    className="calendar-icon"
                    src="/images/icons/calendar.png"
                    alt="calendar"
                />
            }
            clearIcon={
                <img
                    className="close-icon"
                    src="/images/icons/cross.png"
                    alt="calendar"
                />
            }
            calendarClassName="calendar"
        />
    );
};

export default CustomDateTimePicker;