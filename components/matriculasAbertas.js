import styles from "../styles/MatriculasAbertas.module.scss"
import Link from 'next/link'

const MatriculasAbertas = ({queroEntrarLink, hidden}) => {
    return(
        <div hidden={hidden} className={styles.matriculasAbertas}>
                <div className={styles.abertoMatriculas}>Matrículas</div>
                <div className={styles.abertoAbertas}>Abertas!</div>
                

                <div className={styles.abertoTexto}>Imersão Online de 4 dias aprendendo tudo que sei sobre viagens</div>    

                <div className={styles.abertoCorre}>Vagas limitadíssimas!</div>    
                <Link href={queroEntrarLink}>
                    <a target="_blank" className={styles.abertoBotao}> ENTRE NESSE UNIVERSO </a>
                </Link>
        </div>

    );
}
export default MatriculasAbertas;