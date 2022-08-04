import Link from 'next/link'
//
import { useRouter } from 'next/router'
//
import { signIn, useSession, signOut } from 'next-auth/react'
// icons
import MenuCreate from './Icons/MenuCreate'
import Notification from './Icons/Notification'
//
import styles from '../styles/components/Navbar.module.css'



const Navbar = () => {

    const { data, status } = useSession()

    const router = useRouter()

    const handleSignIn = async () => {
        router.push('/auth')
        await signIn('github', {
            callbackUrl: 'http://localhost:3000/'
        })

    }
    const handleSignOut = async () => {
        await signOut({
            callbackUrl: 'http://localhost:3000/'
        })
    }

    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>
                <Link href='/' >
                    YouQ
                </Link>
            </span>
            <div className={styles.right}>
                {status === 'authenticated' && (
                    <>
                        <button className={styles.menu_create}>
                            <MenuCreate size={33} />
                        </button>
                        <button className={styles.notification}>
                            <Notification color="#344563" size={25} />
                        </button>
                    </>
                )}
                {status === 'authenticated' ? (
                    <div className={styles.user}>
                        <img src={data.user?.image} className={styles.avatar} />
                        <div className={styles.name_role}>
                            <span className={styles.name}>
                                {data.user?.name}
                            </span>
                            <span className={styles.role}>
                                Админ
                            </span>
                        </div>
                        <button onClick={handleSignOut}>
                            signOut
                        </button>
                    </div>
                ) : (
                    <button onClick={handleSignIn} className={styles.login}>
                        Войти
                    </button>
                )}
            </div>
        </div>
    )
}


export default Navbar