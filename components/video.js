import { unstable_renderSubtreeIntoContainer } from "react-dom"
import styles from "../styles/Video.module.scss"

const Video = () => {
    return (
        <section className={styles.section}>
            {/* <h1 className={styles.titulo}> IMERSÃO ONLINE DE <span className={styles.bgblue}>7 DIAS</span> APRENDENDO <span className={styles.bgblue}>TUDO QUE SEI</span> SOBRE <span className={styles.bgblue}>VIAGENS</span></h1> */}
            
            <iframe className={styles.video} src="https://www.youtube.com/embed/R-T-lm_2Gfs" frameborder="0" allow="autoplay; fullscreen; encrypted-media"></iframe>
            <div className={styles.btn}>
                

            </div>

        </section>
    )
}

export default Video;