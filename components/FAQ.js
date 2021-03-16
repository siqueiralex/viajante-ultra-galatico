import styles from "../styles/FAQ.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const FAQ = ({abertas, queroEntrarLink}) => {
    return(
        <section className={styles.section}>
            <h1 className={styles.titulo}> PERGUNTAS FREQUENTES</h1>

            <div className={styles.perguntas}>
                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> ISSO É UM CURSO?</h3>
                    <p className={styles.perguntaTexto}>
                    Diferente de um curso, isso é uma Imersão. Serão 4 dias de conteúdo ao vivo todos os dias.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> DIA E HORÁRIO DAS LIVES</h3>
                    <p className={styles.perguntaTexto}>
                    De 24 a 27 de março de 2021. As lives começarão às 20h (horário de Brasília) e terão uma duração média de 2 a 3 horas cada.
                    </p>
                </div>

                <div className={styles.pergunta}>
                     
                    <h3 className={styles.perguntaTitulo}>POR ONDE SERÃO TRANSMITIDAS AS LIVES?</h3>
                    <p className={styles.perguntaTexto}>
                    Todos os dias você receberá o link de acesso à live pelo seu e-mail. Lembre de olhar todas as caixas.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}>COMO POSSO TER ACESSO APÓS A COMPRA?</h3>
                    <p className={styles.perguntaTexto}>
                    Assim que a compra for efetuada, te enviaremos um email com todas as instruções do que fazer.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> QUANDO SERÁ A PRÓXIMA TURMA?</h3>
                    <p className={styles.perguntaTexto}>
                    Como estou no México por alguns dias e depois vou para a Inglaterra, realmente não sei quando será a data exata da próxima turma.
                    </p>
                </div>

                <div className={styles.pergunta}>
                    
                    <h3 className={styles.perguntaTitulo}> PARA QUEM É ESSA IMERSÃO?</h3>
                    <p className={styles.perguntaTexto}>
                    Para quem nunca viajou e quer fazer sua primeira viagem e para quem já viajou mas quer aprender dicas para melhorar a sua viagem.
                    </p>
                </div>
            </div>
            <BtnQueroEntrar abertas={abertas} queroEntrarLink={queroEntrarLink}/>
        </section>
    );

}

export default FAQ;