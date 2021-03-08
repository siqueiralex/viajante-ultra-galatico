import styles from "../styles/BtnQueroEntrar.module.scss"
import Link from 'next/link'

const BtnQueroEntrar = ({queroEntrarLink}) => {
    return(
        <Link href={queroEntrarLink}>
            <button className={styles.button}>QUERO ENTRAR NESSE UNIVERSO!</button>
        </Link>
    )
}

export default BtnQueroEntrar;