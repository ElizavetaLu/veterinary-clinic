import { IDropdown } from "../../interfaces";
import useToggle from "../../hooks/useToggle";
import "./Dropdown.scss";


const Dropdown = ({ value, setValue, options, placeholder }: IDropdown) => {

    const [isActive, toggle] = useToggle();

    const getOptionName = (item: any) => (item?.name || item?.title || item?.address) || placeholder

    return (
        <div className="dropdown" onClick={toggle}>
            <p className="dropdown__selected">{getOptionName(value)}</p>
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
                                        setValue(item);
                                        toggle();
                                    }}
                                >
                                    {getOptionName(item)}
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