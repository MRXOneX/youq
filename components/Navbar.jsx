import { useState } from 'react'
//
import Link from 'next/link'
//
import Image from 'next/image'
//
import { useRouter } from 'next/router'
//
import { signIn, useSession, signOut } from 'next-auth/react'
//
import useOutside from '../hooks/useOutside'
// components
import Dropdown from '../layouts/Dropdown'
// icons
import MenuCreate from './Icons/MenuCreate'
import Exit from './Icons/Exit'
//
import styles from '../styles/components/Navbar.module.css'



const Navbar = () => {

    const { data, status } = useSession()

    const [isOpenUser, setIsOpenUser] = useState(false)

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

    const { ref } = useOutside(() => setIsOpenUser(false))

    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>
                <Link href='/' >
                    YouQ
                </Link>
            </span>
            <span className={styles.title}>
                Profile
            </span>
            <div className={styles.right}>
                {status === 'authenticated' && (
                    <>
                        <button className={styles.menu_create}>
                            <MenuCreate size={33} />
                        </button>
                        {/* <button className={styles.notification}>
                            <Notification color="#344563" size={25} />
                        </button> */}
                    </>
                )}
                {status === 'authenticated' ? (
                    <div style={{ position: 'relative' }}>
                        <div onClick={() => setIsOpenUser(true)} className={styles.user}>
                            <Image 
                                width={32}
                                height={32}
                                alt='avatar' 
                                src={data.user?.image} 
                                className={styles.avatar} 
                            />
                            <div className={styles.name_role}>
                                <span className={styles.name}>
                                    {data.user?.name}
                                </span>
                                <span className={styles.role}>
                                    Админ
                                </span>
                            </div>
                        </div>

                        <Dropdown ref={ref} isShow={isOpenUser} setIsOpenUser={setIsOpenUser}>
                            <div className={styles.dropdown}>
                                <button onClick={handleSignOut} className={styles.exit}>
                                    <Exit color="#FF3D3D" size={22} />
                                    <span className={styles.exit_title}>
                                        Sign out
                                    </span>
                                </button>
                            </div>
                        </Dropdown>
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