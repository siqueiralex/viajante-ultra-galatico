import styles from "../styles/cronograma.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'
import modalStyles from "../styles/modal.module.scss"
import Modal from 'react-modal'
import {useState} from 'react'
import conteudoDias from "../components/conteudoDias.js"

Modal.setAppElement("#__next");

const customStyles = {
   overlay : {
        zIndex: "9999",
    },
    content: {
        top: "50px",
        overflow: "visible",
        padding: "0",
        height: "100vh",
        width: "95vw",
        maxWidth: "800px",
        margin: "0",
        
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -40%)'
          
    }
};

const Cronograma = ({queroEntrarLink}) => {
    const [modalIsOpen, setIsOpen]= useState(false);
    const [modalContent, setModalContent]= useState(conteudoDias[1]);

    function openModal(dia) {
        setModalContent(conteudoDias[dia])
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }
    function closeModal(){
        setIsOpen(false);
        document.body.style.overflow = "auto";
    }



    return (
        <section  id="cronograma" className={styles.section}>
            <h1 className={styles.titulo}> CRONOGRAMA <strong className={styles.bgblue}>PODEROSO</strong> DA IMERSÃO </h1>
            <h1 className={styles.subTitulo}> CLIQUE NO DIA PARA VER OS DETALHES</h1>
            <div className={styles.dias}>
                <div onClick={() => openModal(1)} className={styles.dia}>
                    <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>INTRODUÇÃO E MOCHILÃO ROOTS</div>
                        <div className={styles.moduloTextoRight}>Introdução e tudo o que você precisa saber para viajar com pouco dinheiro</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia1.png"></img>
                </div>

                <div onClick={() => openModal(5)} className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>VIDA NA VAN</div>
                        <div className={styles.moduloTextoRight}>Como construir sua própria van e viajar pelo mundo</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia5.png"></img>
                </div>

                <div onClick={() => openModal(2)}  className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>MOCHILÃO NORMAL</div>
                        <div className={styles.moduloTextoRight}>Mochilão, voluntariado, técnicas para iajar barato e com muito conforto</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia2.png"></img>
                </div>

                <div onClick={() => openModal(6)}  className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>EUROPA E AMÉRICA DO SUL</div>
                        <div className={styles.moduloTextoRight}>Tudo sobre os países mais visitados da Europa e América do Sul + Imigração em Portugal</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia6.png"></img>
                </div>


                <div onClick={() => openModal(3)}  className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>VIDA NO CARRO</div>
                        <div className={styles.moduloTextoRight}>Desde como montar seu carro do zero até a vida minimalista na estrada</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia3.png"></img>
                </div>
                

                <div onClick={() => openModal(7)}  className={styles.dia}>
                <div className={styles.aovivo}>ao vivo</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>DINHEIRO E CONCLUSÃO</div>
                        <div className={styles.moduloTextoRight}>Como fazer dinheiro na estrada e conclusão da imersão</div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia7.png"></img>
                </div>

                <div onClick={() => openModal(4)}  className={styles.dia}>
                    <div className={styles.offline}>offline</div>
                    <div className={styles.textWrapper}>
                        <div className={styles.moduloTituloRight}>AULAS GRAVADAS</div>
                        <div className={styles.moduloTextoRight}>Além de encontros ao vivo teremos conteúdo gravado :D Nesse dia disponibilizarei todas as aulas gravadas da imersão. </div>
                    </div>
                    <img className={styles.imagem} height="130px" src="dia4.png"></img>
                </div>



            </div>
                <BtnQueroEntrar queroEntrarLink={queroEntrarLink} className={styles.botao}/>

                    <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}> 
                        <div className={modalStyles.closeBtn} onClick={closeModal}>X</div>

                        <div className={modalStyles.modal}>
                            <div className={modalStyles.tituloWrapper}>
                                <div className={modalStyles.titulo}>
                                {modalContent.titulo}
                                </div>
                                <div className={modalStyles.subTitulo}>
                                {modalContent.subtitulo}
                                </div>
                            </div>
                            <div className={modalStyles.items}>
                                {modalContent.conteudos.map((conteudo) => 
                                    <div className={modalStyles.item}>
                                        <div className={modalStyles.itemTitulo}>
                                            {conteudo.titulo}
                                        </div>
                                        {conteudo.topicos.map((topico) =>
                                            <ul className={modalStyles.itemLista}>
                                                <div className={modalStyles.itemSubTitulo}>
                                                    {topico.nome}
                                                </div>
                                                {topico.items.map(item =>
                                                    <li>
                                                    {item}
                                                    </li>
                                                )}
                                            </ul>
    
                                        )}
                                        
                                    </div>
                                )}

                            </div>
                        </div>

                    </Modal>
        </section>    
        
    )
}

export default Cronograma;