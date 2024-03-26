
import styles from "./cssModuleComponent/Hero.module.css"
const Hero = () => {
    return (
        <section className={styles.textSection}>
            <div className={styles.TextContainer}>
                <p className={styles.HeadingText}>Become a React Dev</p>
                <p className={styles.subText}>Find a React job that fits your skill set</p>
            </div>
        </section>
    )
}

export default Hero