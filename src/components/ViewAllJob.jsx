import { Link } from 'react-router-dom'

import styles from "./cssModuleComponent/ViewAllJob.module.css"
const ViewAllJob = () => {

    return (
        <div className={styles.btnAddContainer}>
            <Link className={styles.viewAllJob} to='/jobs'>View All Job</Link>
        </div>
        
    )
}

export default ViewAllJob