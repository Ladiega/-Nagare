import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/nagare.png'


export default function Nav(){
    return(
        
        <div className={styles.navbar_container}>
            <nav className={styles.navbar}>                
                <ul className={styles.ul}>
                    <li><Link href='/' className={styles.link}>ABOUT</Link> </li>
                    <li><Link href='/' className={styles.link}>HORARIOS</Link> </li>
										<li>
											<Link href='/' className={styles.link}>
												<Image
												src={Logo}
												alt='Nagare Logo'
												width={30}
												/>
											</Link>
											</li>
                    <li><Link href='/' className={styles.link}>MERCH</Link> </li>
                    <li><Link href='/' className={styles.link}>CONTACT</Link> </li>
                </ul>
            </nav>
        </div>
    )
}