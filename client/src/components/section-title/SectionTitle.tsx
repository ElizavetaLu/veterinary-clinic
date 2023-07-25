import { ISectionTitle } from "../../interfaces";
import "./SectionTitle.scss";

const SectionTitle = ({ title, description }: ISectionTitle) => {
    return (
        <div className="section-title">
            <p className="section-title__text">{title}</p>
            <p className="section-title__description">{description}</p>
        </div>
    );
};

export default SectionTitle;