import { unstable_renderSubtreeIntoContainer } from "react-dom"
import styles from "../styles/Video.module.scss"

import BtnQueroEntrar from "./btnqueroentrar.js"

const Video = ({abertas, queroEntrarLink}) => {
    return (
        <section className={styles.section}>
            {/* <h1 className={styles.titulo}> IMERSÃO ONLINE DE <span className={styles.bgblue}>7 DIAS</span> APRENDENDO <span className={styles.bgblue}>TUDO QUE SEI</span> SOBRE <span className={styles.bgblue}>VIAGENS</span></h1> */}
            
            <iframe loading="lazy" className={styles.video} src="//www.youtube.com/embed/cFS_A4DuNGI?enablejsapi=1&amp;controls=1&amp;autoplay=1&amp;disablekb=1&amp;fs=1&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=1&amp;loop=1&amp;origin=http://viajanteultragalatico.com.br" frameborder="0" allow="autoplay; fullscreen; encrypted-media" allowTransparency="true"></iframe>
            <div className={styles.btn}>
                <BtnQueroEntrar abertas={abertas} queroEntrarLink={queroEntrarLink}/>
            </div>

        </section>
    )
}

export default Video;