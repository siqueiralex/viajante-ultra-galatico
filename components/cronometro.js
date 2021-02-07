import styles from "../styles/Cronometro.module.scss"



const Cronometro = ({timeLeft}) =>{

    return (
        <div className={styles.cronometroWrapper}>
            <div className={styles.cronometro}>
                <h1> Faltam</h1>
                <h3>{timeLeft.days} dias</h3> 
                <h3>{timeLeft.hours} horas</h3>  
                <h3>{timeLeft.minutes} minutos</h3>
                <h3>{timeLeft.seconds} segundos</h3>
                <h4>para a próxima imersão</h4>
            </div>
        </div>

    );
}

export default Cronometro;