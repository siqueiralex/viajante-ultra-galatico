import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/header.js'
import MainBanner from '../components/mainBanner.js'
import Video from "../components/video.js"
import FaixaResumo from "../components/faixaResumo.js"
import OQHavera from "../components/oQHavera.js"
import SeisModulos from "../components/seisModulos.js"
import Cronograma from "../components/cronograma.js"
import PorqueAgora from "../components/porqueAgora.js"
import SobreEliezer from "../components/sobreEliezer.js"

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
    <FaixaResumo/>
    <OQHavera/>
    <SeisModulos/>
    <Cronograma/>
    <PorqueAgora/>
    <SobreEliezer/>
     
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
