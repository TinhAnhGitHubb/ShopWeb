import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'
import styles from '../components/cssModuleComponent/NotFound.module.css'

const NotFound = () => {
    return (
        <>
            <div className={styles.errContainer}>
                <FaExclamationTriangle className={styles.icon} />
                <h1 className={styles.Title}>404 Not Found</h1>
                <p>This place does not exist</p>
                <Link to="/" className={styles.btnGoBack}>Go Back</Link>
            </div>

        </>
    )
}

export default NotFound

