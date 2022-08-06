import { PrismaClient } from "@prisma/client"
/// components

import UserInfo from "../../components/Profile/UserInfo"
import MenuInfo from '../../components/Profile/MenuInfo'
// layouts
import PageContainer from '../../layouts/PageContainer'
//
import styles from '../../styles/pages/Profile.module.css'



const prisma = new PrismaClient()

export async function getServerSideProps({ params }) {

    const user = await prisma.user.findUnique({
        where: {
            id: params.slug,
        },
    })


    return {
        props: { user },
    }
}


const Profile = ({ user }) => {
    console.log(user)
    return (
        <PageContainer>
            <div className={styles.profile}>
                <div className={styles.left}>
                    <UserInfo user={user} />
                </div>
                <div className={styles.right}>
                    <MenuInfo />
                </div>
            </div>
        </PageContainer>
    )
}


export default Profile