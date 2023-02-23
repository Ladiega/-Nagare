import Sticky from "components/sticky/sticky"
import Head from 'next/head'
import Horario from 'components/horarios/index'
import Footer from 'components/footer/index'

import styles from '../styles/Horarios.module.css'


export default function Horarios(){
    return(
        <div className={styles.global_container}>
            <Head>
							<title>NagareBjj Horarios</title>
						</Head>
            <Sticky/>
            <Horario/>
            <Footer/>

        </div>
    )
}