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
                <div className={styles.text}>CONTEÚDO AO VIVO TODOS OS DIAS</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img height="110px" src="/calendario.png" />
                <div className={styles.text}>1 ANO DE ACESSO A ESSE CONTEÚDO DELICIOSO</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img height="95px" src="/grupo.svg"/>
                <div className={styles.text}>COMUNIDADE PARA MEUS QUERIDOS PARTICIPANTES S2</div>
            </div>
        </div> 
    )
}

export default FaixaResumo;