import styles from "../styles/OQHavera.module.scss"
import btnStyles from "../styles/BtnQueroEntrar.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const OQHavera = ({abertas, queroEntrarLink}) => {
    return (
        <section className={styles.section}>
            <h1 className={styles.titulo}>O QUE HAVERÁ NESSE <span className={styles.bgblue}>NOVO UNIVERSO?</span></h1>
            
            <div className={styles.textoWrapper}>
                <div className={styles.texto}>
                    <p>Eu percebi durante a pandemia que muitas pessoas abriram os olhos para o quão curta é a vida e que ela tem que  ser aproveitada, olhos que já abri 6 anos atrás e comecei a viajar o mundo para experimentar de tudo e viver a cada segundo. Desde então gravo vídeos para o Youtube mostrando como a vida é legal.
Mas dessa vez eu resolvi criar uma imersão online onde vou dar uma pausa na minha viagem por 1 semana e ensinar exatamente <strong>TUDO</strong> o que sei sobre viagens!</p>
                    
                    <p>
                    Serão 4 dias em que eu vou estar 100% disponível para conversar com um número limitado de participantes. Teremos conteúdos <strong>AO VIVASSO</strong>, aulas épicas por vídeo e grupos com participantes! Cada dia da semana teremos um conteúdo diferente sobre viagem de mochilão, que sou especialista!
                    </p>
                    

                    {/* <p>Eu percebi durante a pandemia que muitas pessoas abriram os olhos para o quão <strong>curta é a vida</strong> e tem que ser aproveitada, olhos que já abri 6 anos atrás e comecei a <strong>viajar o mundo</strong> para experimentar de tudo e viver a cada segundo. Desde então gravo vídeos para o Youtube mostrando como <strong>a vida é legal.</strong> Mas dessa vez eu resolvi criar uma imersão online onde vou dar uma pausa na minha viagem por <strong>1 semana e ensinar exatamente TUDO o que sei sobre viagens!</strong></p>
                    <p>Serão 7 dias onde eu vou estar <strong>100% disponível para conversar com um número limitado de participantes</strong>. Teremos conteúdos AO VIVASSO, aulas épicas por vídeo, ebook e grupos com participantes! Fique atento porque vou ligar de surpresa para alguns participantes no meio dessa semana! Cada dia da semana teremos um conteúdo diferente sobre um modo diferente de viagem, <strong>modos que sou especialista!</strong></p> */}
                </div>
                <div className={styles.setedias}>
                    <img height="350" src="/4-dias.png"></img>
                </div>
            </div>

            <div className={btnStyles.btnWrapper}>
                <BtnQueroEntrar abertas={abertas} queroEntrarLink={queroEntrarLink}/>
            </div>
        </section>
    )
}

export default OQHavera;