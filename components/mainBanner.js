import styles from '../styles/MainBanner.module.scss'
import Titulo3D from '../components/titulo3d.js'
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const MainBanner = () => {
    return(
        <section className={styles.section}>
            <div className={styles.titulo}>
                <Titulo3D />

            </div>
            <div className={styles.button}>
                <BtnQueroEntrar/>
            </div>
        </section>)
}

export default MainBanner;