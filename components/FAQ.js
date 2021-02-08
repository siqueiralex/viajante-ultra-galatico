import styles from "../styles/FAQ.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'
const FAQ = () => {
    return(
        <section className={styles.section}>
            <h1 className={styles.titulo}> PERGUNTAS FREQUENTES</h1>

            <div className={styles.perguntas}>
                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> ISSO É UM CURSO?</h3>
                    <p className={styles.perguntaTexto}>
                    Diferente de um curso, isso é uma Imersão. Serão 7 dias corridos de conteúdo ao vivo todos os dias.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> A QUE HORAS SERÃO AS LIVES?</h3>
                    <p className={styles.perguntaTexto}>
                    Todas as lives começarão às 20h (horário de Brasília) e terão uma duração de 2-3 horas cada.
                    </p>
                </div>

                <div className={styles.pergunta}>
                     
                    <h3 className={styles.perguntaTitulo}>POR ONDE SERÃO TRANSMITIDAS AS LIVES?</h3>
                    <p className={styles.perguntaTexto}>
                    As Lives serão realizadas pela plataforma Zoom.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}>COMO POSSO TER ACESSO APÓS A COMPRA?</h3>
                    <p className={styles.perguntaTexto}>
                    Assim que a compra for efetuada, te enviaremos um email com todas as instruções do que fazer.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> QUEM ESTÁ NA FILA DE ESPERA TEM PRIORIDADE NA COMPRA?</h3>
                    <p className={styles.perguntaTexto}>
                    Não, a fila de espera é apenas para te manter informado por email quando as inscrições estiverem abertas novamente.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> PARA QUEM É ESSA IMERSÃO?</h3>
                    <p className={styles.perguntaTexto}>
                    Para quem nunca viajou e para quem já tem algum experiência de viagem. Aqui você vai aprender várias formas de viajar dentre outros conteúdos excelentes!
                    </p>
                </div>
            </div>
            <BtnQueroEntrar/>
        </section>
    );

}

export default FAQ;