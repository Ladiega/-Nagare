import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/nagare.png'


export default function Nav(){
    return(
        
        <div className={styles.navbar_container}>
            <nav className={styles.navbar}>                
                <ul className={styles.ul}>
                    <li><Link href='/nosotros' className={styles.link}>NOSOTROS</Link> </li>
                    <li><Link href='/horarios' className={styles.link}>HORARIOS</Link> </li>
										<li>
											<Link href='/' className={styles.img}>
												<Image
												src={Logo}
												alt='Nagare Logo'
												width={70}
												/>
											</Link>
											</li>
                    <li><Link href='/' className={styles.link}>MERCH</Link> </li>
                    <li><Link href='/' className={styles.link}>CONTACTO</Link> </li>
                </ul>
            </nav>
        </div>
    )
}