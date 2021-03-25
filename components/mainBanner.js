import styles from '../styles/MainBanner.module.scss'
import Cronometro from './cronometro.js'
import MatriculasAbertas from './matriculasAbertas.js';
import MatriculasEncerradas from './matriculasEncerradas.js';
const MainBanner = ({queroEntrarLink, abertas, timeLeft}) => {
    


    return(
        <section id="page_top" className={styles.section}>
            

            <div className={styles.centerWrapper}>
              <img src='/EscolaDoViajante.png' className={styles.logo}/>
              
              <div className={styles.ImagemWrapper}>
                  <img src='/ImagemEliezer.png' className={styles.Imagem}/>
              </div>

              <div className={styles.cronometroWrapper}>
                <MatriculasEncerradas></MatriculasEncerradas>
                {/* <Cronometro className={styles.cronometro} hidden={abertas? 'hidden' : ""} timeLeft={timeLeft} queroEntrarLink={queroEntrarLink}></Cronometro>
                <MatriculasAbertas hidden={abertas ? '' : 'hidden'} queroEntrarLink={queroEntrarLink} ></MatriculasAbertas> */}
              </div>
              
                <div className={styles.textoImersao}>
                APRENDA A TEORIA E A PRÁTICA DE <span className={styles.bgblue}> COMO SER LIVRE PELO MUNDO</span>
                </div>

            </div>

            

            
        </section>
        )
}




export default MainBanner;