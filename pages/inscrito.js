import Head from 'next/head'
import styles from "../styles/inscrito.module.scss"

export default function inscrito() {
    return(
        <>
        <Head>
            <title>Escola do Viajante Galático</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>

          <div className={styles.overlay}>

            <div id="cronometro" className={styles.abertoCronometro}>
                <div className={styles.abertoMatriculas}>Bem Vindo a Esse</div>
                <div className={styles.abertoAbertas}>NOVO UNIVERSO</div>

                <div className={styles.abertoTexto}>Você será avisado por email quando as matrículas da próxima imersão estiverem abertas!</div>    

                <div className={styles.abertoCorre}>Mas Você já desbloqueou um grupo fechado para ter acesso à entrada da galáxia! Acabei de te enviar por email um link de acesso a esse grupo!</div>    
                <div className={styles.abertoCorre}>Se não encontrar o e-mail, procure na caixa de SPAM ou de Promoções :)</div>    
                {/* <Link href={queroEntrarLink}>
                    <button className={styles.abertoBotao}> ENTRE NESSE UNIVERSO </button>
                </Link> */}

            </div>







          </div>

      </section>
      </>
    )
}