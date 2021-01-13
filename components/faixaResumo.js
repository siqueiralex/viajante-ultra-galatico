import styles from "../styles/FaixaResumo.module.scss"

const FaixaResumo = () => {
    return(
        <div className={styles.faixa}>
            <div className={styles.card}>
                <img height="125px" src="/relogio.svg"/>
                <div className={styles.text}> 10H DE CONTEÚDO ÉPICO E EXCLUSIVO</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img height="118px" src="/livro.svg"/>
                <div className={styles.text}> 1 EBOOK MARAVILHOSO PARA OS PRIMEIROS 100 COMPRADORES</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img height="118px" src="/calendario.svg"/>
                <div className={styles.text}>90 DIAS DE ACESSO A ESSE CONTEÚDO DELICIOSO</div>
            </div>
            <span className={styles.barra}></span>
            <div className={styles.card}>
                <img height="118px" src="/grupo.svg"/>
                <div className={styles.text}>GRUPO FECHADO COM MEUS QUERIDOS PARTICIPANTES S2</div>
            </div>
        </div>
    )
}

export default FaixaResumo;