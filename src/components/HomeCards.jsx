
import HomeCard from "./HomeCard"
import styles from "./cssModuleComponent/HomeCards.module.css"

const HomeCards = () => {

    const devTag = {
       
        p1: "For Developers",
        p2: "Browse our React jobs and start your career today",
        buttonText: "Browse Job",
        dev: true
    }
    const emplyTag = {
        
        p1: "For Employers",
        p2: "List your job to find the perfect developer for the role",
        buttonText: "Add Job",
        dev:false
    }

    return (
        <div className={styles.tagbox}>
            <HomeCard ownTag={devTag} />
            <HomeCard ownTag={emplyTag} />
        </div>
    )
}

export default HomeCards