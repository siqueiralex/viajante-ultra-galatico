import styles from '../styles/MainBanner.module.scss'
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const MainBanner = () => {
    return(
        <section className={styles.section}>
            <div className={styles.logoWrapper}>
                <img width="520" height="237" src='/titulo-3d.png' className={styles.logo}/>
            </div>
            <div className={styles.btnWrapper}>
                <BtnQueroEntrar className={styles.button}/>
            </div>
        </section>
        )
}

export default MainBanner;