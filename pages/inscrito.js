import Head from 'next/head'
import Link from 'next/link'
import styles from "../styles/inscrito.module.scss"

export default function inscrito() {
    return(
        <>
        <Head>
            <title>Escola do Viajante Galático</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>

          <div className={styles.subOverlay}>

            <div className={styles.subBox}>
                <div className={styles.subBemVindo}>Bem Vindo a Esse</div>
                <div className={styles.subNovoUniverso}>NOVO UNIVERSO</div>

                <div className={styles.subAvisoEmail}>Você será avisado por email quando as matrículas da próxima imersão estiverem abertas!</div>    

                <div className={styles.subSpamAviso}>Mas Você já desbloqueou um grupo fechado para ter acesso à entrada da galáxia! Acabei de te enviar por email um link de acesso a esse grupo!</div>    
                <div className={styles.subSpamAviso}>Se não encontrar o e-mail, procure na caixa de SPAM ou de Promoções :)</div>    
                <Link href="/">
                    <button className={styles.subRetornar}>Retornar pro site</button>
                </Link>
                
                </div>
          </div>

      </section>
      </>
    )
}