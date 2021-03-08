import styles from "../styles/porqueAgora.module.scss"
import BtnQueroEntrar from '../components/btnqueroentrar.js'

const PorqueAgora = ({queroEntrarLink}) => {
    return(
        <section className={styles.section}>
            <h1 className={styles.titulo}> PORQUE VOCÊ DEVE ENTRAR NESSE UNIVERSO <strong className={styles.bgblue}>AGORA?</strong></h1>

            <div className={styles.motivos}>
                <div className={styles.motivo}>
                    <div className={styles.imagemWrapper}>
                        <img src= "/limitado.svg" className={styles.motivoImagem}></img>
                    </div>
                    <h3 className={styles.motivoTitulo}> É ALGO LIMITADÍSSIMO!</h3>
                    <p className={styles.motivoTexto}>
                    Essa imersão será feita apenas em 2021, com pouquíssimas! É realmente uma oportunidade única de aprender MUITOS conhecimentos e colocar em prática nas suas viagens futuras!
                    </p>
                </div>

                <div className={styles.motivo}>
                    <div className={styles.imagemWrapper}>
                        <img src= "/aovivo.svg" className={styles.motivoImagem}></img>
                    </div>
                    <h3 className={styles.motivoTitulo}> É AO VIVO!</h3>
                    <p className={styles.motivoTexto}>
                    Escolhi ser ao vivo para ter mais contato com os participantes, assim eu posso ouvir suas histórias, tirar dúvidas e orientar com dicas de mochilão da melhor forma possível.
                    </p>
                </div>

                <div className={styles.motivo}>
                    <div className={styles.imagemWrapper}>
                        <img src= "/cifroes.svg" className={styles.motivoImagem}></img>
                    </div>  
                    <h3 className={styles.motivoTitulo}> ENTRE ANTES E ECONOMIZE!</h3>
                    <p className={styles.motivoTexto}>
                    O valor da imersão irá aumentar R$ 20 reais a cada turma. Ou seja, se a primeira turma custou R$197, a segunda irá custar R$217, a terceira R$237 e assim por diante.
                    </p>
                </div>

                <div className={styles.motivo}>
                    <div className={styles.imagemWrapper}>
                        <img src= "/terraplana.svg" className={styles.motivoImagem}></img>
                    </div>
                    <h3 className={styles.motivoTitulo}> PARA QUANDO O MUNDO VOLTAR AO NORMAL!</h3>
                    <p className={styles.motivoTexto}>
                    Quando todas as fronteiras se abrirem e o mundo começar a voltar ao normal, todo mundo vai querer viajar! E usando os conhecimentos adquiridos você poderá montar uma viagem épica!
                    </p>
                </div>

                <div className={styles.motivo}>
                    <div className={styles.imagemWrapper}>
                        <img src= "/relogio2.svg" className={styles.motivoImagem}></img>
                    </div>
                    <h3 className={styles.motivoTitulo}> A VIDA É MUITO CURTA!</h3>
                    <p className={styles.motivoTexto}>
                    A vida é curta e tem que ser aproveitada agora! Entre para o mundo dos viajantes e você saberá como aproveitar ao máximo da nossa estadia no mundo!
                    </p>
                </div>

                <div className={styles.motivo}>
                    <div className={styles.imagemWrapper}>
                        <img src= "/vidacurta.svg" className={styles.motivoImagem}></img>
                    </div>
                    <h3 className={styles.motivoTitulo}> SE NÃO CONSEGUIR NESSA TURMA, ENTRE NA PRÓXIMA!</h3>
                    <p className={styles.motivoTexto}>
                    Serão abertas turmas todos os meses. Se você não conseguiu nessa, a próxima turma te aguarda!
                    </p>
                </div>
            </div>
            <BtnQueroEntrar queroEntrarLink={queroEntrarLink}/>
        </section>
    )
}

export default PorqueAgora;