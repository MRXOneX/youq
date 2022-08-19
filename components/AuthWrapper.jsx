import { useSession } from "next-auth/react"
import Image from "next/image"
//
import Logo from '../utils/svg/youq-logo.svg'
import loading from '../utils/gifs/loading.gif'


const AuthWrapper = ({ children }) => {
    const session = useSession()

    if (session.status === 'loading') return (
        <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'white'
        }}>
            <Image height={200} objectFit='contain' src={loading} alt="loading" />
        </div>
    )
    // font-weight: 900;
    // font-size: 2.2em;

    // color: #4971FF;

    return (
        <>
            {children}
        </>
    )
}


export default AuthWrapper