import styles from "../styles/sobreEliezer.module.scss"

const sobreEliezer = () => {
    return(
        <section className={styles.section}>
            <div className={styles.sobre}>
                <h1 className={styles.titulo}> SOBRE ELIEZER TYMNIAK</h1>
                <div className={styles.texto}>
                    <p>
                    Eu fiz da viagem o meu estilo de vida quando tinha <strong>apenas 18 anos de idade</strong>. Comecei realmente do zero, fazia meu dinheiro vendendo brigadeiros na rua e depois saia para viajar, conseguia me virar no mês com 300 reais e fazer uma viagem muito bem sucedida onde eu aproveitava o máximo dos lugares e o mais importante, das pessoas que conhecia. Depois aprendi a <strong>trabalhar nos lugares que passava</strong>, então minhas viagens tiveram uma duração ainda maior. Trabalhei em vários países como Chile, Portugal, Peru, Inglaterra e França. As vezes trabalhava apenas em troca da acomodação ou fazia um bom dinheiro onde passava, como em Londres que consegui juntar 5 mil Libras em 5 meses (na cotação de hoje daria quase 35,000 Reais!)    
                    </p>    
                    Sei muito bem o que é viajar de mochilão assim como é viajar levando sua casa! Montei minha própria van do zero com a ajuda de um grande amigo (Jayme Savite) e viajei toda a América do Sul de van, passando em mais de 7 países e tendo as mais diversas experiencias. Também montei uma pequena casa em um carro e viajei por toda costa do Brasil, aproveitando ao máximo do nosso país com a liberdade de um carro e um conforto de uma casa ao mesmo tempo. Isso é genial!
                    <p>
                    </p>
                    <p>
                    Já viajo o mundo há 6 anos e acumulei muitos conhecimentos que certamente irão te ajudar na sua caminhada como viajante. Já viajei a América do Sul duas vezes, viajei e morei na Europa por dois anos, viajei o Brasil diversas vezes e tenho muitas outras aventuras por vir.
                    </p>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <img src="/imagemSobre.jpg"></img>
            </div>
        </section>
    )
}

export default sobreEliezer;