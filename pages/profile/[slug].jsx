import { useState } from "react"
//
import { useRouter } from "next/router"
//
import { trpc } from "../../utils/trpc"
/// components
import UserInfo from "../../components/Profile/UserInfo"
import MenuInfo from '../../components/Profile/MenuInfo'
import ProfileAnswers from "../../components/Profile/ProfileAnswers"
// layouts
import PageContainer from '../../layouts/PageContainer'
//
import styles from '../../styles/pages/Profile.module.css'




const Profile = () => {
    const router = useRouter()

    const { data: profile = null, isLoading } = trpc.useQuery([
        'profile.getOne',
        { id: router?.query?.slug }
    ])


    const [menuActive, setMenuActive] = useState({
        name: 'answers',
        component: <ProfileAnswers answers={profile?.answers} />
    })



    if (!profile) return null
    

    return (
        <PageContainer title={`${profile?.name} - youq.pro`}>
            {isLoading ? (
                <>
                    loading
                </>
            ) : (
                <>
                    {profile ? (
                        <div className={styles.profile}>
                            <div className={styles.left}>
                                <UserInfo profile={profile} />
                            </div>
                            <div className={styles.right}>
                                <MenuInfo 
                                    comments={profile.comments} 
                                    questions={profile.questions} 
                                    answers={profile.answers} 

                                    menuActive={menuActive}
                                    setMenuActive={setMenuActive} 
                                />
                                {menuActive?.component}
                            </div>
                        </div>
                    ) : (
                        <span>
                            Пользователя с таким <b>ID: {router.query.slug}</b> нет
                        </span>
                    )}
                </>
            )}
        </PageContainer>
    )
}


export default Profile