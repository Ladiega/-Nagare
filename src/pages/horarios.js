import Sticky from "components/sticky/sticky"
import Footer from 'components/footer/index'

import styles from '../styles/Horarios.module.css'
export default function Horarios(){
    return(
        <div className={styles.horarios_container}>
            <Sticky/>
            <div className={styles.content_container}>
                <h1>HORARIOS</h1>
                
            </div>
            
            <Footer/>

        </div>
    )
}