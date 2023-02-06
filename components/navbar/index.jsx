import styles from './navbar.module.css'

export default function Nav(){
    return(
        
        <div className={styles.navbar_container}>
            <nav className={styles.navbar}>                
                <ul className={styles.ul}>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
}