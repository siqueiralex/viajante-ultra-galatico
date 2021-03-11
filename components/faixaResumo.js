import styles from "../styles/FaixaResumo.module.scss"

const FaixaResumo = () => {
    return(
        <div className={styles.faixa}>
            <div className={styles.card}>
                <img height="95px" src="/relogio.svg"/>
                <div className={styles.text}> 10H DE CONTEÚDO ÉPICO E EXCLUSIVO</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img src="/live.png"/>
                <div className={styles.text}>CONTEÚDO AO VIVO ENTRE OS DIAS 17 e 20 DE MARÇO</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img height="110px" src="/calendario.png" />
                <div className={styles.text}>1 ANO DE ACESSO A ESSE CONTEÚDO DELICIOSO</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img height="120px" src="/grupo.png"/>
                <div className={styles.text}>COMUNIDADE PARA MEUS QUERIDOS PARTICIPANTES</div>
            </div>
        </div> 
    )
}

export default FaixaResumo;