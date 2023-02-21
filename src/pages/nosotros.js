import Sticky from "components/sticky/sticky"
import Footer from "components/footer"
import styles from '../styles/Nosotros.module.css'

import Image from 'next/image'


import Willie from '../../public/willie.jpeg'
import Robi from '../../public/robi.jpeg'
import Rodo from '../../public/rodo.jpeg'
import Andy from '../../public/andy.jpeg'
import Mat from '../../public/mat.jpeg'



export default function Nosotros(){
  
    return(

        <div>
           <Sticky />
            <div className={styles.text_container}>
            
            <div className={styles.text_one}>
            Somos una academia de Jiu-Jitsu Brasilero ubicada en el barrio Polo Club en Bogotá, Colombia, enfocada en la defensa personal y en la formación integral denuestos atletas. Tenemos como pilar en nuestra filosofía el respeto por el otro, el trabajo en grupo y el fortalecimiento de nuestras capacidades físicas personales. También enfocamos nuestro entrenamiento en el acondicionamiento físico y mental.
            <br/><br/>
            En la Parte de acondicionamiento físico tenemos como Head Coach a el maestro William Pachon experto en la materia de entrenamiento físico , alimentación e hábitos que tendrán un cambio positivo en tu calidad de vida. 
            <br/> <br/>
            Ofrecemos clases    de adultos ,principiantes, niños, clases privadas tanto de bjj y acondicionamiento físico y talleres de defensa personal. Nuestros entrenadores están capacitados para adaptarse a tus necesidades y ofrecerte un muy buen plan de entrenamiento.
            <br/> <br/> 
            

            <div className={styles.text_animate}> ¡Anímate a entrenar con Nosotros.! </div> 
            </div>               
            </div> 
            <div className={styles.entrenadores_container}>
            <div><h1>NUESTROS ENTRENADORES</h1></div>

						

						<div className={styles.img_container}>
                <div>
                <Image
                    src={Robi}
                    alt="Robi foto"
                    className={styles.img}
                    width={200}
                />

                </div>
                <div>
                <Image
                src={Willie}
                alt='Willie foto'
                className={styles.img}
                width={200}
                />

								</div>
                <div>
									<Image
                    src={Rodo}
                    alt="Rodo foto"
                    className={styles.img}
                    width={200}
                />
								</div>
                
								<div>
								 <Image
                    src={Mat}
                    alt="Mateo foto"
                    className={styles.img}
                    width={200}
                />
								</div>
                <div>
								 <Image
                 
                    src={Andy}
                    alt="Andres foto"
                    className={styles.img}
                    width={200}
                />
								</div>
							</div>
						    

            </div>
            <Footer/>
        </div>
    )
}