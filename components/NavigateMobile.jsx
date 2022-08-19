import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
//
import Plus from '../utils/svg/plus.svg'
import User from  '../utils/svg/user.svg'
import Menu from '../utils/svg/menu.svg'
//
import styles from '../styles/components/NavigateMobile.module.css'



const NavigateMobile = () => {

    const { data } = useSession()


    const router = useRouter()

    return (
        <div className={styles.navigate_mobile}>
            <div style={{ height: '100%' }}>
                <button onClick={() => router.push('/')} className={styles.menu}>
                    <Menu fill={
                        router.pathname === '/' ? '#4971FF' : '#71716e'
                    } width={22} height={22} />
                    <span 
                        style={{ 
                            color: router.pathname === '/' ? '#4971FF' : '#71716e'
                        }}
                        className={styles.menu_title}
                    >
                        Главная
                    </span>
                </button>
            </div>
            <div style={{ height: '100%' }}>
                <button className={styles.create}>
                    <Plus fill="white" width={28} height={28} />
                </button>
            </div>
            <div style={{ height: '100%' }}>
                <button onClick={() => router.push(`/profile/${data?.user?.id}`)} className={styles.user}>
                    <User fill={
                        router.pathname === `/profile/${data?.user?.id}` ? '#4971FF' : '#71716e'
                    } width={22} height={22} />
                    <span 
                        style={{ 
                            color: router.pathname === `/profile/${data?.user?.id}` ? '#4971FF' : '#71716e'
                        }}
                        className={styles.user_title}>
                        Профиль
                    </span>
                </button>
            </div>
        </div>
    )
}

export default NavigateMobile