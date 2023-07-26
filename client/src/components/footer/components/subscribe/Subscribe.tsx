import { useState } from "react";
import "./Subscribe.scss";

const Subscribe = () => {

    const [email, setEmail] = useState('');
    
    return (
        <div className="subscribe">
            <p className="subscribe__title">Subscribe Now</p>

            <div className="subscribe__field">
                <img className="subscribe__field-icon" src="/images/icons/email-white.png" alt="email" title="email" />
                <input
                    className="subscribe__field-input"
                    placeholder="Enter your Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <button className="subscribe__field-button">Subscribe</button>
        </div>
    );
};

export default Subscribe;