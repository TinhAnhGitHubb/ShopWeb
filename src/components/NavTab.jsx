
import styles from "./cssModuleComponent/NavTab.module.css"
const NavTab = () => {



    return (
        <>
            <div className={styles.containerTwo}>
                <div className={styles.navMenu} id="navMenu">
                    <ul className={styles.navList}>
                        <li className={styles.navList}>
                            <div className={styles.navLink}>
                                <a href="/">Home</a>
                            </div>
                        </li>

                        <li className={styles.navList}>
                            <div className={styles.navLink}>
                                <a href="/jobs">Jobs</a>
                            </div>
                        </li>

                        <li className={styles.navList}>
                            <div className={styles.navLink}>
                                <a href="/add-jobs">Add Jobs</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavTab