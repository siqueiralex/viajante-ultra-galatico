
import styles from "../styles/MatriculasEncerradas.module.scss"


const MatriculasEncerradas = () => {
    return(
        <div className={styles.matriculasEncerradas}>
                <div className={styles.encMatriculas}>Matrículas</div>
                <div className={styles.encEncerradas}>Encerradas!</div>
                

                <div className={styles.encTexto}>Imersão Online de 4 dias aprendendo tudo que sei sobre viagens</div>    

                <div className={styles.encCorre}>Entre no canal do telegram para saber mais:</div>    

                <div className={styles.telegramButtonWrapper}>
                    <a target="_blank" href="https://t.me/joinchat/WWJQRYeMlxQKwFYh" className={styles.telegramButton}>
                    CANAL DO TELEGRAM
                    </a>
                </div>
                    
        </div>

    );
}
export default MatriculasEncerradas;