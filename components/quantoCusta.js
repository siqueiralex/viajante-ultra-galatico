import styles from "../styles/quantoCusta.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'


const QuantoCusta = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.titulo}> QUANTO VAI CUSTAR?</h1>

            <div className={styles.boxWrapper}>
                <div className={styles.boxBigTitle}>
                    INCRÍVEIS
                </div>
                <div className={styles.boxGreenTitle}>R$245!</div>
                <div className={styles.boxSubtitle}>PODE PARCELAR EM ATÉ 12X</div>
                <ul className={styles.lista}>
                    <li>Encontros 100% ao vivo</li>
                    <li>Ligação pessoal com 70 participantes</li>
                    <li>Aulas extras gravadas</li>
                    <li>Aprenda com quem viaja o mundo há 6 anos sem parar</li>
                    <li>+ de 15 horas de conteúdo</li>
                    <li>90 dias de acesso ao conteúdo</li>
        
                </ul>
            </div>

            <BtnQueroEntrar></BtnQueroEntrar>
        </section>
    );
}

export default QuantoCusta;