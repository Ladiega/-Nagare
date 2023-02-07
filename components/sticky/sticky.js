





import classNames from "classnames";
import useSticky from "./useSticky";
import styles from '../navbar/navbar.module.css'


import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/nagare.png'

export default function Sticky() {
  const { sticky, stickyRef } = useSticky();
  return (
    <div>
    
      <nav ref={stickyRef} className={classNames("nav flex", { sticky })}>
      <ul className={styles.ul}>
                    <li><Link href='/nosotros' className={styles.link}>NOSOTROS</Link> </li>
                    <li><Link href='/' className={styles.link}>HORARIOS</Link> </li>
										<li>
											<Link href='/' className={styles.link}>
												<Image
												src={Logo}
												alt='Nagare Logo'
												width={100}
												/>
											</Link>
											</li>
                    <li><Link href='/' className={styles.link}>MERCH</Link> </li>
                    <li><Link href='/' className={styles.link}>CONTACTO</Link> </li>
                </ul>
      </nav>
      
    
      
                
      
      {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`
          }}
        />
      )}
      
    </div>
  );
}
