import { useSession } from 'next-auth/react'
//
import { useRouter } from 'next/router'
//
import Back from '../../utils/svg/back.svg'
//
import styles from '../../styles/components/Settings/Settings.module.css'



const SettingsWrapperMobile = () => {

    const { data } = useSession()

    const router = useRouter()

    return (
        <div className={styles.settings_mobile}>
            <div className={styles.mobile_header}>
                <Back
                    height={22}
                    width={22}
                    fill="#232323"
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.push(`/profile/${data?.user?.id}`)}
                />
                <span className={styles.mobile_header_title}>
                    {data?.user?.name}
                </span>
            </div>
        </div>
    )
}


export default SettingsWrapperMobile