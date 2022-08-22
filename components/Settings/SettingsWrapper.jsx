import { useSession } from 'next-auth/react'
//
import { useRouter } from 'next/router'
//
import Back from '../../utils/svg/back.svg'
//
import styles from '../../styles/components/Settings/Settings.module.css'


const SettingsWrapper = ({ children }) => {
    const { data } = useSession()

    const router = useRouter()
    return (
        <div className={styles.settings}>
            <div className={styles.header}>
                <button 
                    onClick={() => router.push(`/profile/${data?.user?.id}`)}
                    className={styles.header_back}
                >
                    <Back 
                        height={18}
                        width={18}
                        fill="#232323"
                    />
                    <span className={styles.name}>
                        {data?.user?.name}
                    </span>
                </button>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default SettingsWrapper