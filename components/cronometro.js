import styles from "../styles/Cronometro.module.scss"

const Cronometro = ({timeLeft}) =>{

    return (        
        <div id="cronometro" className={styles.cronometro}>
            <div className={styles.countdownWrapper}>
                <div className={styles.cronField}>
                    <div className={styles.cronNumero}>{timeLeft.days}</div>
                    <div className={styles.cronLabel}> <p>DIAS</p>  </div>
                </div>

                <div className={styles.cronField}>
                    <div className={styles.cronNumero}>{timeLeft.hours}</div>
                    <div className={styles.cronLabel}> <p>HORAS</p></div>
                </div>

                <div className={styles.cronField}>
                    <div className={styles.cronNumero}>{timeLeft.minutes}</div>
                    {/* <div className={styles.cronNumero}>33</div> */}
                    <div className={styles.cronLabel}> <p>MIN</p>  </div>
                </div>

                <div className={styles.cronField}>
                    <div className={styles.cronNumero}>{timeLeft.seconds}</div>
                    {/* <div className={styles.cronNumero}>55</div> */}
                    <div className={styles.cronLabel}> <p>SEG</p></div>
                </div>
            </div>
                <h4 className={styles.paraProxima}>PARA A PRÓXIMA IMERSÃO</h4>


            <div className={styles.informeDados}>
                INSIRA SEUS DADOS PARA FICAR INFORMADO
            </div>

            <div className={styles.formulario}>
                <form action="https://app.convertkit.com/forms/2028410/subscriptions" method="post" data-sv-form="2028410" data-uid="0e0bf57b55" data-format="inline" data-version="5">

                    <div className={styles.nomeField}>
                        <label for="mce-FNAME" className={styles.nomeLabel}>
                            Nome*
                        </label>
                        <input id="mce-FNAME" className={styles.nomeInput} aria-label="First Name" name="fields[first_name]" required="" placeholder="Nome" type="text"></input>
                    </div>

                    <div className={styles.emailField}>
                        <label for="mce-EMAIL" className={styles.emaiLaber}>
                        Email*
                        </label>
                        <input className={styles.emailInput} id="mce-EMAIL" name="email_address" aria-label="Email Address" placeholder="Email" required="" type="email"></input>
                        
                    </div>

                    <div className={styles.concordoField}>
                        <input className={styles.concordoInput} type="checkbox" value="1" name="group[80035][1]" id="mce-group[80035]-80035-0" data-use-type="STRING" data-always-visible="true" />
                            Eu concordo em receber comunicações.
                    </div>
                    
                    <div className={styles.formButtonWrapper}>
                        <button className={styles.formButton}>
                            AVISE-ME
                        </button>
                    </div>

                </form>
                
                <div className={styles.notSpam}>
                    Pode ficar tranquilo, a gente <strong>não</strong> vai usar seu contato para enviar SPAM.
                </div>

            </div>
        </div>


    
        
    );
}

export default Cronometro;