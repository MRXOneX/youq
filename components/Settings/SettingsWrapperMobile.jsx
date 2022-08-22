//
import Back from '../../utils/svg/back.svg'
//
import styles from '../../styles/components/Settings/Settings.module.css'



const SettingsWrapperMobile = () => {
    return (
        <div className={styles.settings_mobile}>
            <div className={styles.mobile_header}>
                <Back
                    height={22}
                    width={22}
                    fill="#232323"
                    style={{ cursor: 'pointer' }}
                />
                <span className={styles.mobile_header_title}>
                    Миша Полещенков
                </span>
            </div>
        </div>
    )
}


export default SettingsWrapperMobile