import Link from 'next/link'
import Image from 'next/image'
//
import styles from '../styles/components/Navbar.module.css'



const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>
                <Link href='/' >
                    YouQ
                </Link>
            </span>
            <div>
                {/* <button className={styles.login}>
                    Войти
                </button> */}
                <div className={styles.user}>
                    <img src="https://i.imgur.com/67syzoU.png" className={styles.avatar}/>
                    <div className={styles.name_role}>
                        <span className={styles.name}>
                            Misha Poleshchenkov
                        </span>
                        <span className={styles.role}>
                            Админ
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar