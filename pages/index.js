import Head from 'next/head'
import { useEffect, useState } from "react";  

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


const diaAbertura = +new Date(`03/21/2021 08:00:00`);

const queroEntrarLink = "https://twitter.com/josenalencar/status/1371228645138784260";

export default function Home() {

  const calculateTimeLeft = () => {  
    const difference = diaAbertura - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        abertas:true,
      };

      if (difference>0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          abertas: false,
        };
      }
      return timeLeft;
    } 

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [abertas, setAbertas] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setAbertas(timeLeft.abertas)
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (  
    <>
      <Head>
      <title>Escola do Viajante Galático</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <MainBanner abertas={abertas} queroEntrarLink={queroEntrarLink} timeLeft={timeLeft}/>
      <Video abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <FaixaResumo abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <OQHavera abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <SeisModulos abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <Cronograma abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <PorqueAgora abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <SobreEliezer abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <QuantoCusta abertas={abertas} queroEntrarLink={queroEntrarLink}/>
      <FAQ abertas={abertas} queroEntrarLink={queroEntrarLink}/>
    
     
      <footer className={styles.footer}>
        <div className={styles.demaisDuvidas}>
          Para demais dúvidas, envie um email para <a className={styles.email} target="_blank" href="mailto:contato@viainfinda.com.br">contato@viainfinda.com.br</a>
        </div>
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
