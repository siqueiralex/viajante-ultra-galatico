import Link from 'next/link'
import styles from "../styles/BoxMatriculasAbertas.module.scss"

const BoxMatriculasAbertas = ({queroEntrarLink})=> {
    return (
            <div className={styles.abertoCronometro}>
                <div className={styles.abertoMatriculas}>Matrículas</div>
                <div className={styles.abertoAbertas}>Abertas</div>

                <div className={styles.abertoTexto}>Imersão Online de 7 dias aprendendo tudo que sei sobre viagens</div>    

                <div className={styles.abertoCorre}>Vagas limitadas a 300 participantes!</div>    
                <Link href={queroEntrarLink}>
                    <button className={styles.abertoBotao}> ENTRE NESSE UNIVERSO </button>
                </Link>
            </div>
    );
}

export default BoxMatriculasAbertas;