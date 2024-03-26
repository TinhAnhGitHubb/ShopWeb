import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

const Spinners = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '100px auto',
        fontSize: '50px'
    };

    return (
        <ClipLoader
            loading={loading}
            color="blue"
            cssOverride={override}
        />
    );
};

Spinners.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Spinners;
