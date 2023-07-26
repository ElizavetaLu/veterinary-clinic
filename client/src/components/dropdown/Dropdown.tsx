import { useState } from "react";
import { IDropdown } from "../../interfaces";
import useToggle from "../../hooks/useToggle";
import "./Dropdown.scss";


const Dropdown = ({ selected, options }: IDropdown) => {

    const [value, setValue] = useState(selected);
    const [isActive, toggle] = useToggle()

    return (
        <div className="dropdown" onClick={toggle}>
            <p className="dropdown__selected">{value}</p>
            <img className={`dropdown__vector ${isActive && 'dropdown__vector--active'}`} src="/images/icons/vector.png" alt="vector" />

            {
                isActive &&
                <div className="dropdown__options">
                    {
                        options.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className="dropdown__option"
                                    onClick={() => {
                                        setValue(item?.name || item.address);
                                        toggle();
                                    }}
                                >
                                    {item?.name || item?.address}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Dropdown