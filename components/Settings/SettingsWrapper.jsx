//
import styles from '../../styles/components/Settings/Settings.module.css'


const SettingsWrapper = ({ children }) => {
    return (
        <div className={styles.settings}>
            {children}
        </div>
    )
}

export default SettingsWrapper