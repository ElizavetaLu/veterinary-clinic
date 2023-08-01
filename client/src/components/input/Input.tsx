import { IInput } from "../../interfaces";
import "./Input.scss";

const Input = ({ type = "text", placeholder, value, setValue, required }: IInput) => {

    return (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            required={required}
        />
    );
};

export default Input;