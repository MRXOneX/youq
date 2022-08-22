import NavigateSettings from "../../components/Settings/NavigateSettings"
import PageContainer from "../../layouts/PageContainer"
//
import SettingsWrapper from "../../components/Settings/SettingsWrapper"
import SettingsWrapperMobile from "../../components/Settings/SettingsWrapperMobile"
//
import styles from '../../styles/pages/Settings.module.css'


const Settings = () => {
    
    return (
        <PageContainer>
            <div className={styles.settings}>
                <div className={styles.left}>
                    <SettingsWrapper>
                        ss
                    </SettingsWrapper>
                    <SettingsWrapperMobile>
                        21312
                    </SettingsWrapperMobile>
                </div>
                <div className={styles.right}>
                    <NavigateSettings />
                </div>
            </div>
        </PageContainer>
    )
}

export default Settings