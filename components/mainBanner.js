import styles from '../styles/MainBanner.module.scss'
import Cronometro from './cronometro.js'
import { useEffect, useState } from "react";  
import BoxMatriculasAbertas from "../components/boxMatriculasAbertas.js"





const MainBanner = ({queroEntrarLink, diaAbertura}) => {
  
    const calculateTimeLeft = () => {  
        const difference = diaAbertura - +new Date();
        let timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          aberto:true
        };
        if (difference>0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            aberto: false
          };
        }
    
        return timeLeft;
    } 

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });


    return(
        <section id="page_top" className={styles.section}>
            

            <div className={styles.centerWrapper}>
              <img src='/EscolaDoViajante.png' className={styles.logo}/>
              
              <div className={styles.ImagemWrapper}>
                  <img src='/ImagemEliezer.png' className={styles.Imagem}/>
              </div>

              <div className={styles.cronometroWrapper}>
                {timeLeft.aberto
                  ?<BoxMatriculasAbertas queroEntrarLink={queroEntrarLink}/>
                  :<Cronometro className={styles.cronometro} timeLeft={timeLeft} queroEntrarLink={queroEntrarLink}></Cronometro>
                }
                  
              </div>
              
                <div className={styles.textoImersao}>
                IMERSÃO ONLINE DE <span className={styles.bgblue}>7 DIAS</span> APRENDENDO <span className={styles.bgblue}>TUDO QUE SEI</span> SOBRE <span className={styles.bgblue}>VIAGENS</span>
              </div>

              
                {/* {timeLeft.aberto && 
                  <div className={styles.btnWrapper}>
                    <BtnQueroEntrar/>
                  </div>
                } */}
            </div>

            

            
        </section>
        )
}




export default MainBanner;