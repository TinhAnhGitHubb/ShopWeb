import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from "./cssModuleComponent/HomeCard.module.css";

const HomeCard = ({ ownTag }) => {
    const classBox = ownTag.dev ? styles.devBox : styles.employerBox;
    const buttonClass = ownTag.dev ? styles.devBtn : styles.emBtn;
    const destination = ownTag.dev ? "/jobs" : "/add-jobs";

    const navigate = useNavigate();

    const handleClick = () => {
        console.log(destination)
        navigate(destination);
    };

    return (
        <div>
            <div className={classBox}>
                <p className={styles.p1Format}>{ownTag.p1}</p>
                <p className={styles.p2Format}>{ownTag.p2}</p>
                <button
                    onClick={handleClick}
                    className={buttonClass}>
                    {ownTag.buttonText}
                </button>
            </div>
        </div>
    );
};

HomeCard.propTypes = {
    ownTag: PropTypes.shape({
        p1: PropTypes.string.isRequired,
        p2: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        dev: PropTypes.bool.isRequired
    }).isRequired,
};

export default HomeCard;
