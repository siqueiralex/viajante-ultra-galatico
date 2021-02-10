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
import QuantoCusta from "../components/quantoCusta.js"
import FAQ from "../components/FAQ.js"


const diaAbertura = +new Date(`02/10/2021 20:00:00`);

const queroEntrarLink = "#page_top";

export default function Home() {

  return (  
    <>
      <Head>
      <title>Escola do Viajante Galático</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <MainBanner diaAbertura={diaAbertura} queroEntrarLink={queroEntrarLink}/>
      <Video queroEntrarLink={queroEntrarLink}/>
      <FaixaResumo queroEntrarLink={queroEntrarLink}/>
      <OQHavera queroEntrarLink={queroEntrarLink}/>
      <SeisModulos queroEntrarLink={queroEntrarLink}/>
      <Cronograma queroEntrarLink={queroEntrarLink}/>
      <PorqueAgora queroEntrarLink={queroEntrarLink}/>
      <SobreEliezer queroEntrarLink={queroEntrarLink}/>
      <QuantoCusta queroEntrarLink={queroEntrarLink}/>
      <FAQ queroEntrarLink={queroEntrarLink}/>
    
     
      <footer className={styles.footer}>
        <div className={styles.redesSociais}>
          <a href="https://pt-br.facebook.com/viaInfinda/" target="_blank">
            <img width="40" height="40" src="facebook.svg"></img>
          </a>

          <a href="https://www.youtube.com/channel/UCkIEY6rUSPy4qQjLqBBLUSg" target="_blank">
            <img width="40" height="40" src="youtube.svg"></img>
          </a>

          <a href="https://www.instagram.com/viainfinda/" target="_blank">
            <img width="40" height="40" src="instagram.svg"></img>
          </a>
        </div>

        <p styles={styles.copyright}> Copyright © 2020 <a href="https://www.viainfinda.com.br" target="_blank">Via Infinda</a> - Todos os direitos reservados</p>

      </footer>
    </>
  )
}
