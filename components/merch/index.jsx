
import styles from './producto.module.css'
import Image from 'next/image'
import camiseta1 from '../../public/merch/camisetanegra1.jpeg'
import camiseta2 from '../../public/merch/camisetanegra2.jpg'
import camiseta3 from '../../public/merch/camisetanegra3.jpg'
import saco3 from '../../public/merch/saco3.jpg'
import mughblanco from '../../public/merch/mughblanco.jpg'
import mughnegro from '../../public/merch/mughnegro.jpg'
export default function Productos(){
    return(
        <div>
       		<div className={styles.producto_container}>
                MERCH
                <div className={styles.merch_contaner}>
                <div className={styles.card_container}>
                    <Image
                    alt='merch'
                    src={camiseta1}
                    className={styles.camiseta}
                    />

                <div className={styles.card_titulo}>
                    CAMISETA NEGRA NAGARE
                </div>
                <div className={styles.card_tamanos}>S,M,XL
                </div>
                <div className={styles.precios}>SOLD OUT</div>
                </div>
              

                <div className={styles.card_container} >
                    <Image
                    alt='merch'
                    src={camiseta2}
                    className={styles.camiseta2}
                    />
                     <div className={styles.card_titulo}>
                    CAMISETA NEGRA NAGARE
                </div>
                <div className={styles.card_tamanos}>S,M,XL
                </div>
                <div className={styles.precios}>SOLD OUT</div>
                </div>

                <div className={styles.card_container}>
                    <Image
                    alt='merch'
                    src={camiseta3}
                    className={styles.camiseta}
                    />
                     <div className={styles.card_titulo}>
                    CAMISETA BLANCA NAGARE
                </div>
                <div className={styles.card_tamanos}>S,M,XL
                </div>
                <div className={styles.precios}>SOLD OUT</div>
                </div>

                <div className={styles.card_container}>
                    <Image
                    alt='merch'
                    src={saco3}
                    className={styles.camiseta}
                    />
                     <div className={styles.card_titulo}>
                    SACO NEGRO
                </div>
                <div className={styles.card_tamanos}>S,M,XL
                </div>
                <div className={styles.precios}>SOLD OUT</div>
                </div>

                <div className={styles.card_container}>
                    <Image
                    alt='merch'
                    src={mughblanco}
                    className={styles.camiseta}
                    />
                     <div className={styles.card_titulo}>
                    MUGH BLANCO MONEDA NAGARE
                </div>
                <div className={styles.card_tamanos}>S,M,XL
                </div>
                <div className={styles.precios}>SOLD OUT</div>
                </div>

                <div className={styles.card_container}>
                    <Image
                    alt='merch'
                    src={mughnegro}
                    className={styles.camiseta}
                    />
                     <div className={styles.card_titulo}>
                    MUGH NEGRO BANER
                </div>
                <div className={styles.card_tamanos}>S,M,XL
                </div>
                <div className={styles.precios}>SOLD OUT</div>
                </div>
                </div>            
        	</div>
        
        </div>
    )
}