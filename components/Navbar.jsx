import { useEffect, useState } from 'react'
//
import Link from 'next/link'
//
import Image from 'next/image'
//
import { useRouter } from 'next/router'
//
import { signIn, useSession, signOut } from 'next-auth/react'
//
import useWindowSize from '../hooks/useWindowSize'
import useOutside from '../hooks/useOutside'
// components
import Dropdown from '../layouts/Dropdown'
//
import level from '../utils/level'
// icons
import MenuCreate from './Icons/MenuCreate'
import Exit from './Icons/Exit'
import Search from '../utils/svg/search.svg'
import Filter from '../utils/svg/filter.svg'
//
import styles from '../styles/components/Navbar.module.css'




const Navbar = () => {

    const { data, status } = useSession()

    const [width, height] = useWindowSize()

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

    useEffect(() => {
        if (width <= 620) {
            setIsOpenUser(false)
        }
    }, [width])


    const { ref } = useOutside(setIsOpenUser)


    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>
                <Link href='/' >
                    YouQ
                </Link>
            </span>
            <div className={styles.title}>
                <button className={styles.title_search}>
                    <Search width={23} height={23} />
                </button>
                <span>
                    Вопросы
                </span>
                <button className={styles.title_filter}>
                    <Filter />
                </button>
            </div>
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
                    <div ref={ref} style={{ position: 'relative' }}>
                        <div style={{
                            backgroundColor: isOpenUser && '#DEEBFF'
                        }} onClick={() => setIsOpenUser(prev => !prev)} className={styles.user}>
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
                                    {data?.user?.isAdmin ? 'Админ' : level[data?.user?.level]}
                                </span>
                            </div>
                        </div>

                        <Dropdown isShow={isOpenUser} setIsOpenUser={setIsOpenUser}>
                            <div className={styles.dropdown}>
                                <button onClick={() => router.push(`/profile/${data?.user?.id}`)} className={styles.exit}>
                                    <span className={styles.exit_title}>
                                        Мой профиль
                                    </span>
                                </button>
                                <button onClick={handleSignOut} className={styles.exit}>
                                    <Exit color="#FF3D3D" size={20} />
                                    <span className={styles.exit_title}>
                                        Выйти
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