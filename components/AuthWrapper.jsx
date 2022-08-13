import { useSession } from "next-auth/react"
import Image from "next/image"
import loading from '../utils/gifs/loading.gif'


const AuthWrapper = ({ children }) => {
    const session = useSession()
    console.log(session)

    if (session.status === 'loading') return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={loading} />
        </div>
    )

    return (
        <>
            {children}
        </>
    )
}


export default AuthWrapper