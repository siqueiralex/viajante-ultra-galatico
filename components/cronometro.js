import styles from "../styles/Cronometro.module.scss"



const Cronometro = ({timeLeft}) =>{

    return (        
        <div className={styles.cronometro}>
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
                <form>
                    <div className={styles.nomeField}>
                        <label for="nome_id" className={styles.nomeLabel}>
                            Nome*
                        </label>
                        <input id="nome_id" className={styles.nomeInput} name="name" type="text" data-use-type="STRING"  required="required"/>
                    </div>

                    <div className={styles.emailField}>
                        <label for="email_id" className={styles.emaiLaber}>
                        Email*
                        </label>
                        <input id="email_id" className={styles.emailInput} name="email" type="email" data-use-type="STRING"  required="required"/>
                    </div>

                    <div className={styles.concordoField}>
                        <input className={styles.concordoInput} id="form-checkbox" name="privacy_data[communications]" type="checkbox" value="1" data-use-type="STRING" data-always-visible="true" />
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