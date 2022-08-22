//
import { useRouter } from 'next/router'
//
import styles from '../../styles/components/Settings/NavigateSettings.module.css'



const NavigateSettings = () => {


    const router = useRouter()
    


    return (
        <div className={styles.navigate_settings}>
            <div className={styles.header}>
                <span>
                    Настройки
                </span>
            </div>
            <div className={styles.content}>
                <div
                    onClick={() => router.push('/settings/profile')}
                    style={{
                        background: router.pathname === '/settings/profile' && 'rgb(229 239 255)'
                    }}
                    className={styles.navigate_elem}
                >
                    {/* <Image height={22} width={22} src={user} alt="" /> */}
                    <span className={styles.title}>
                        Профиль
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavigateSettings