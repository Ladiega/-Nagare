import Link from "next/link"
import Image from "next/image"
import styles from './footer.module.css'

import instagram from '../../public/instagramW.svg'
import calvo from '../../public/img/calvoTattooLogoW.png'
import nagareBaner from '../../public/nagareBanerW.png'
import willie from '../../public/img/willieW.png'

export default function Footer(){
    return(
        <div>
          <div className={styles.footer_container}>
           
            <div className='icon-nagare-container'>
                  <Image
                    src={nagareBaner}
                    alt='nagare Logo'
                    width={200}
                  />

                </div>


              <div className={styles.icons_container}>
                <div className={styles.instagram_container}>
                  <Link href='https://www.instagram.com/nagarebjj' target='_blank'>
                  <Image
                  className="instagram-icon"
                  alt="Instagram"
                  src={instagram}
                  width={40}
                  />
                  </Link>               
                </div>
                <div className={styles.calvo_container}>
                  <Link href="https://www.instagram.com/calvotattoohouse" target='_blank'>
                  <Image
                  className="calvo-icon"
                  alt="calvotattohouse"
                  src={calvo}
                  width={40}
                  />
                  </Link>
                </div>

                <div className={styles.willie_container}>
                  <Link href="https://www.instagram.com/strongerxcolombia2" target='_blank'>
                  <Image
                  className="willie-icon"
                  alt="Stronger man Colombia"
                  src={willie}
                  width={60}
                  />
                  </Link>
                </div>
                
              </div>


              <div className={styles.info_container}>
                
                <div className={styles.textOne}>Nagare Brazilian Jiujitsu</div>
                <div className={styles.textTwo}>Defensa Personal</div>
                <div className={styles.textTree}>Carrera 21a, Barrios Unidos, Cundinamarca</div>
                <div className={styles.textFour}>+57 302 7531409</div>
                <div className={styles.textFive}>nagarebjj@gmail.com</div>  

              </div>
            
          </div>
        </div>
    )
}