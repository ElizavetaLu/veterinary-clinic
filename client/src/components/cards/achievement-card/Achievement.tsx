import { IAchievementCard } from "../../../interfaces";
import "./Achievement.scss";


const Achievement = ({ icon, title, color }: IAchievementCard) => {

    return (
        <div className="achievement-card">
            <div className="achievement-card__icon-container" style={{ backgroundColor: color }}>
                <img className="achievement-card__icon" src={`/images/icons/achievements/${icon}`} alt="icon" title="acivement" />
            </div>
            <p className="achievement-card__text">{title}</p>
        </div>
    );
};

export default Achievement