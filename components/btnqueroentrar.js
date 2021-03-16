import styles from "../styles/BtnQueroEntrar.module.scss"
import Link from 'next/link'

const BtnQueroEntrar = ({queroEntrarLink, abertas}) => {
    return(

        <Link href={abertas ? queroEntrarLink : '#page_top'}>
            <a target={abertas ? '_blank' : ''} className={styles.button}>QUERO ENTRAR NESSE UNIVERSO!</a>
        </Link>
    )
}

export default BtnQueroEntrar;