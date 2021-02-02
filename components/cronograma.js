import styles from "../styles/cronograma.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const Cronograma = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.titulo}> CRONOGRAMA <strong className={styles.bgblue}>PODEROSO</strong> DA IMERSÃO<br></br>
            (Clique no dia para abrir com detalhes)</h1>

            <div className={styles.dias}>
                <div className={styles.dia}>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>INTRODUÇÃO E MOCHILÃO ROOTS</div>
                        <div className={styles.moduloTextoRight}>Introdução e tudo o que você precisa saber para viajar com pouco dinheiro</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia1.png"></img>
                </div>
                <div className={styles.dia}>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>MOCHILÃO NORMAL</div>
                        <div className={styles.moduloTextoRight}>Mochilão, voluntariado, técnicas para iajar barato e com muito conforto</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia2.png"></img>
                </div>
                <div className={styles.dia}>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>VIDA NO CARRO</div>
                        <div className={styles.moduloTextoRight}>Desde como montar seu carro do zero até a vida minimalista na estrada</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia3.png"></img>
                </div>
                <div className={styles.dia}>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>VIDA NA VAN</div>
                        <div className={styles.moduloTextoRight}>Como construir sua própria van e viajar pelo mundo</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia5.png"></img>
                </div>
                <div className={styles.dia}>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>EUROPA E AMÉRICA DO SUL</div>
                        <div className={styles.moduloTextoRight}>Tudo sobre os países mais visitados da Europa e América do Sul + Imigração em Portugal</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia6.png"></img>
                </div>
                <div className={styles.dia}>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>DINHEIRO E CONCLUSÃO</div>
                        <div className={styles.moduloTextoRight}>Como fazer dinheiro na estrada e conclusão da imersão</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia6.png"></img>
                </div>

                <BtnQueroEntrar className={styles.botao}/>

            </div>
        </section>
    )
}

export default Cronograma;