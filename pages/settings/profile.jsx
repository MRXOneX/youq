import NavigateSettings from '../../components/Settings/NavigateSettings'
import SettingsWrapper from '../../components/Settings/SettingsWrapper'
//
import PageContainer from '../../layouts/PageContainer'
//
import styles from '../../styles/pages/ProfileSettings.module.css'


const ProfileSettings = () => {
    return (
        <PageContainer>
            <div className={styles.profile_settings}>
                <div className={styles.left}>
                    <SettingsWrapper>
                    left
                    </SettingsWrapper>
                </div>
                <div className={styles.right}>
                    <NavigateSettings />
                </div>
            </div>
        </PageContainer>
    )
}

export default ProfileSettings