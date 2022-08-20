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

    useEffect(() => {
        if (profile?.answers) {
            setMenuActive({
                name: 'answers',
                component: <ProfileAnswers answers={profile?.answers} />
            })
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
                        <ProfileInfo profile={profile} />
                        <div className={styles.menu}>
                            <ProfileAnswers answers={profile.answers} />
                        </div>
                        <div style={{ paddingTop: '80px' }} />
                    </div>
                    <div className={styles.right}>
                        <MenuInfo
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

        </PageContainer>
    )
}


export default Profile