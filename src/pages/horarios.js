import Sticky from "components/sticky/sticky"
import Horario from 'components/horarios/index'
import Footer from 'components/footer/index'

import styles from '../styles/Horarios.module.css'


export default function Horarios(){
    return(
        <div className={styles.global_container}>
            <Sticky/>
            <Horario/>
            <Footer/>

        </div>
    )
}