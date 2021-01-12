import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/header.js'
import MainBanner from '../components/mainBanner.js'
import Video from "../components/video.js"

export default function Home() {
  return (  
    <div className={styles.container}>
      <Head>
      <title>Escola do Viajante Ultra Galático</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>
      <Header/>
      <MainBanner/>
    </main> 
    <Video/>

    
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
    </div>
  )
}
