import Sticky from "components/sticky/sticky"
import Footer from 'components/footer/index'

import styles from '../styles/Horarios.module.css'

import Images from 'next/image'
import horarios from '../../public/horarios.jpeg'
export default function Horarios(){
    return(
        <div className={styles.global_container}>
            <Sticky/>
            <div className={styles.horario_container}>
                <Images
                src={horarios}
                alt='Horarios imagen'

                />

            </div>
            <Footer/>

        </div>
    )
}