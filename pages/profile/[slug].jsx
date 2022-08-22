import { useEffect, useState } from "react"
//
import Image from "next/image"
//
import { useRouter } from "next/router"
//
import { trpc } from "../../utils/trpc"
/// components
import ProfileInfo from "../../components/Profile/ProfileInfo"
import MenuInfo from '../../components/Profile/MenuInfo'
import ProfileAnswers from "../../components/Profile/ProfileAnswers"
import ProfileQuestions from "../../components/Profile/ProfileQuestions"
// layouts
import PageContainer from '../../layouts/PageContainer'
//
import loading from '../../utils/gifs/loading.gif'
//
import styles from '../../styles/pages/Profile.module.css'




const Profile = () => {
    const router = useRouter()

    const { data: profile = null, status } = trpc.useQuery([
        'profile.getOne',
        { id: router?.query?.slug }
    ])


    const [menuActive, setMenuActive] = useState()

    const menuAnswers = {
        name: 'answers',
        component: <ProfileAnswers answers={profile?.answers} />
    }
    const menuQuestions = {
        name: 'questions',
        component: <ProfileQuestions questions={profile?.questions} />
    }

    useEffect(() => {
        if (profile?.answers) {
            setMenuActive(menuAnswers)
        }
    }, [profile])






    return (
        <PageContainer title={`${profile?.name} - youq.pro`}>
            {status === 'loading' && (
                <div style={{
                    width: '100%',
                    height: '100%',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image objectFit="contain" height={150} src={loading} alt="loading" />
                </div>
            )}

            {profile && status === 'success' ? (
                <div className={styles.profile}>
                    <div className={styles.left}>
                        <ProfileInfo 
                            menuAnswers={menuAnswers}
                            menuQuestions={menuQuestions}

                            menuActive={menuActive}
                            setMenuActive={setMenuActive}
                            profile={profile} 
                        />
                        <div className={styles.menu}>
                            {menuActive?.component}
                        </div>
                        <div style={{ paddingTop: '80px' }} />
                    </div>
                    <div className={styles.right}>
                        <MenuInfo
                            questions={profile.questions}
                            answers={profile.answers}
                            menuAnswers={menuAnswers}
                            menuQuestions={menuQuestions}

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

        </PageContainer>
    )
}


export default Profile