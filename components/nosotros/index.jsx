import styles from './nosotros.module.css'

export default function Nosotros(){
    return(
        <div>
            <div className={styles.text_container}>
            <div>
            Somos una academia de Jiu-Jitsu Brasilero ubicada en el barrio Polo Club en Bogotá, Colombia, enfocada en la defensa personal y en la formación integral denuestos atletas. Tenemos como pilar en nuestra filosofía el respeto por el otro, el trabajo en grupo y el fortalecimiento de nuestras capacidades físicas personales. También enfocamos nuestro entrenamiento en el acondicionamiento físico y mental.
            <br/><br/>Todas las personas están invitadas a hacer parte de nuestra academia y hacer parte de nuestro proceso de crecimiento deportivo. 
            Como siempre, el arte suave es nuestra meta y nuestra visión<br/> <br/>

            <div className={styles.text_two}>¡Anímate a entrenar con Nosotros.! </div>
            </div>
            </div>
        </div>
    )
}