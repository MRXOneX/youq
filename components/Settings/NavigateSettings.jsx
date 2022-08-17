import Image from 'next/image'
//
import { useRouter } from 'next/router'
//
import user from '../../utils/svg/user-regular.svg'
//
import styles from '../../styles/components/Settings/NavigateSettings.module.css'



const NavigateSettings = () => {

    const router = useRouter()

    return (
        <div className={styles.navigate_settings}>
            <div className={styles.header}>
                <h3>Настройки</h3>
            </div>
            <div className={styles.content}>
                <div
                    onClick={() => router.push('/settings/profile')}
                    style={{
                        background: router.pathname === '/settings/profile' && 'rgb(229 239 255)'
                    }}
                    className={styles.navigate_elem}
                >
                    <Image height={22} width={22} src={user} alt="" />
                    <span style={{
                        fontWeight: router.pathname === '/settings/profile' && 700
                    }} className={styles.title}>
                        Профиль
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavigateSettings