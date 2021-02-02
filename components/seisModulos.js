import styles from "../styles/seisModulos.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const SeisModulos = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.titulo}> SERÃO 6 MÓDULOS ENSINADOS NESSA IMERSÃO</h1>
            <div className={styles.modulos}>
                <div className={styles.linha}>
                    <div className={styles.modulo}>
                        <div className={styles.textWrapper}>
                            <div className={styles.moduloTituloRight}>MOCHILÃO ULTRA ROOTS</div>
                            <div className={styles.moduloTextoRight}>Como viajar o mundo com pouquíssima grana! Aprenda o espírito do mochileiro ultra roots!</div>
                        </div>
                        <div className={styles.image}>
                            <img height="170px" src="/mochileiropapelhig.svg"></img>
                        </div>
                    </div>
                    <div className={styles.modulo}>
                        <div className={styles.image}>
                            <img height="170px" src="/van.svg"></img>
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.moduloTituloLeft}>VIDA NA VAN</div>
                            <div className={styles.moduloTextoLeft}>Para mim é o melhor estilo de viagem! Aprenda como é viver em uma van! Desde o início até a prática!</div>
                        </div>
                    </div>
                </div>

                <div className={styles.linha}>
                    <div className={styles.modulo}>
                        <div className={styles.textWrapper}>
                            <div className={styles.moduloTituloRight}>VIDA NO CARRO</div>
                            <div className={styles.moduloTextoRight}>Aprenda como é a vida dentro do seu próprio carro! E sinta a liberdade da vida em 4 rodas</div>
                        </div>
                        <div className={styles.image}>
                            <img height="170px" src="/carro.svg"></img>
                        </div>
                    </div>
                    <div className={styles.modulo}>
                        <div className={styles.image}>
                            <img height="170px" src="/mochileiro.svg"></img>
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.moduloTituloLeft}>MOCHILÃO NORMAL</div>
                            <div className={styles.moduloTextoLeft}>Viajar o mundo com uma mochila apenas! Aprenda sobre o incrível mundo do mochilão que pode durar por vários anos da sua vida!</div>
                        </div>
                    </div>
                </div>

                <div className={styles.linha}>
                    <div className={styles.modulo}>
                        <div className={styles.textWrapper}>
                            <div className={styles.moduloTituloRight}>FAZER DINHEIRO NA VIAGEM </div>
                            <div className={styles.moduloTextoRight}>Aprenda técnicas para fazer dinheiro com o cara que vendeu brigadeiro para viajar por 2 anos na Europa</div>
                        </div>
                        <div className={styles.image}>
                            <img height="170px" src="/cifrao.svg"></img>
                        </div>
                    </div>
                    <div className={styles.modulo}>
                        <div className={styles.image}>
                            <img height="170px" src="/globo.svg"></img>
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.moduloTituloLeft}>AMÉRICA DO SUL E EUROPA</div>
                            <div className={styles.moduloTextoLeft}>Tudo o que você precisa saber para viajar bem e barato pela América do Sul e Europa! + Imigração em Portugal</div>
                        </div>
                    </div>
                </div>

                <div className={styles.textoFinal}>
                    <p className={styles.textoFinalAzul}>
                    No fim dessa imersão você vai aprender desde ir para qualquer lugar com uma mochila e sem dinheiro até viajar com sua própria CamperVan. Mas o mais importante, <strong>você vai estar preparado para começar sua carreira de viajante!</strong>
                    </p>

                    <p className={styles.importante}>
                    IMPORTANTE! ESSA IMERSÃO TEM UM LIMITE DE 300 PARTICIPANTES POR SEMANA E SERÁ FEITA EM SEMANAS LIMITADAS SÓ PELO ANO DE 2021!
                    </p>
                </div>

                <BtnQueroEntrar/>

            </div>
        </section>
    )

}

export default SeisModulos;