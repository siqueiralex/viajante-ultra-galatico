import styles from "../styles/cronograma.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const Cronograma = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.titulo}> CRONOGRAMA <strong className={styles.bgblue}>PODEROSO</strong> DA IMERSÃO </h1>

            <div className={styles.dias}>
                <div className={styles.dia}>
                    <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>INTRODUÇÃO E MOCHILÃO ROOTS</div>
                        <div className={styles.moduloTextoRight}>Introdução e tudo o que você precisa saber para viajar com pouco dinheiro</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia1.png"></img>
                </div>

                <div className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>VIDA NA VAN</div>
                        <div className={styles.moduloTextoRight}>Como construir sua própria van e viajar pelo mundo</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia5.png"></img>
                </div>

                <div className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>MOCHILÃO NORMAL</div>
                        <div className={styles.moduloTextoRight}>Mochilão, voluntariado, técnicas para iajar barato e com muito conforto</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia2.png"></img>
                </div>

                <div className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>EUROPA E AMÉRICA DO SUL</div>
                        <div className={styles.moduloTextoRight}>Tudo sobre os países mais visitados da Europa e América do Sul + Imigração em Portugal</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia6.png"></img>
                </div>


                <div className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>VIDA NO CARRO</div>
                        <div className={styles.moduloTextoRight}>Desde como montar seu carro do zero até a vida minimalista na estrada</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia3.png"></img>
                </div>
                

                <div className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>DINHEIRO E CONCLUSÃO</div>
                        <div className={styles.moduloTextoRight}>Como fazer dinheiro na estrada e conclusão da imersão</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia7.png"></img>
                </div>

                <div className={styles.dia}>
                    <div className={styles.offline}>offline</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>AULAS GRAVADAS</div>
                        <div className={styles.moduloTextoRight}>Além de encontros ao vivo teremos conteúdo gravado :D Nesse dia disponibilizarei todas as aulas gravadas da imersão. </div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia4.png"></img>
                </div>



            </div>
                <BtnQueroEntrar className={styles.botao}/>
        </section>
    )
}

export default Cronograma;