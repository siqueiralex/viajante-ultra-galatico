import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header.js'

export default function Home() {
  return (
      <>
      <Head>
        <title>Escola do Viajante Ultra Galático</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <section>

        </section>
        <section>

        </section>
        <section>

        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
