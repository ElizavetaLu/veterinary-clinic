import { ISwitcher } from "../../interfaces";
import "./Switcher.scss";

const Switcher = ({ isActive, setIsActive }: ISwitcher) => {

    return (
        <div className="switch">
            <p className="switch__title">Have you ever been to our clinic before? </p>
            <input
                checked={!isActive}
                onChange={() => setIsActive(!isActive)}
                className="switch__input"
                type="checkbox"
                id="switch"
            />
            <label className="switch__label" htmlFor="switch">Toggle</label>
        </div>
    );
};

export default Switcher;