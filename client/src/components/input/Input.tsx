import { IInput } from "../../interfaces";
import "./Input.scss";

const Input = ({ type = "text", placeholder, value, setValue }: IInput) => {
    return (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default Input