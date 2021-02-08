import styles from '../styles/MainBanner.module.scss'
import BtnQueroEntrar from './btnqueroentrar.js'
import Cronometro from './cronometro.js'
import { useEffect, useState } from "react";  

// DIA DA ABERTURA MM/DD/YYY HH:MM:SS
const diaAbertura = +new Date(`02/07/2021 14:00:00`)

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



const MainBanner = () => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });


    return(
        <section className={styles.section}>
            
            <div className={styles.logoWrapper}>
                <img width="500" height="228" src='/titulo-3d.png' className={styles.logo}/>
            </div>
            <div className={styles.ImagemWrapper}>
                <img width="573" height="628" src='/ImagemEliezer.png' className={styles.Imagem}/>
            </div>    
            <div className={styles.cronometroWrapper}>
                <Cronometro className={styles.cronometro} timeLeft={timeLeft}></Cronometro>
            </div>

            {timeLeft.aberto &&
              <BtnQueroEntrar></BtnQueroEntrar>
            }

            
        </section>
        )
}




export default MainBanner;