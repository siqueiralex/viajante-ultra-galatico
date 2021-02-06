import styles from '../styles/MainBanner.module.scss'
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const MainBanner = () => {
    return(
        <section className={styles.section}>
            <div className={styles.logoWrapper}>
                <img width="500" height="228" src='/titulo-3d.png' className={styles.logo}/>
            </div>
            <div className={styles.ImagemWrapper}>
                <img width="434" height="480" src='/ImagemEliezer.png' className={styles.Imagem}/>
            </div>    
            
            <BtnQueroEntrar className={styles.button}/>
            
        </section>
        )
}

export default MainBanner;