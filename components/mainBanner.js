import styles from '../styles/MainBanner.module.scss'
import Cronometro from './cronometro.js'
import { useEffect, useState } from "react";  
import MatriculasAbertas from './matriculasAbertas.js';

const MainBanner = ({queroEntrarLink, diaAbertura}) => {
    
    const calculateTimeLeft = () => {  
        const difference = diaAbertura - +new Date();
        let timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          abertas:true,
        };

        if (difference>0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            abertas: false,
          };
        }
    
        return timeLeft;
    } 

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [abertas, setAbertas] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
          setAbertas(timeLeft.abertas)
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
                  <Cronometro className={styles.cronometro} hidden={abertas? 'hidden' : ""} timeLeft={timeLeft} queroEntrarLink={queroEntrarLink}></Cronometro>
                  <MatriculasAbertas hidden={abertas ? '' : 'hidden'} queroEntrarLink={queroEntrarLink} ></MatriculasAbertas>
              </div>
              
                <div className={styles.textoImersao}>
                APRENDA A TEORIA E A PRÁTICA DE <span className={styles.bgblue}> COMO SER LIVRE PELO MUNDO</span>
                </div>

            </div>

            

            
        </section>
        )
}




export default MainBanner;