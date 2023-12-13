import styles from './Container.module.css'

type Props = {
    children: string | JSX.Element | JSX.Element[] 
}


export default function Container ({children} : Props){

    return(
        <div className={`${styles.Container}}`}>
            {children}
        </div>
    )
}