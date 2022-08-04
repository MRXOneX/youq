import { useSession } from "next-auth/react"



const AuthWrapper = ({ children }) => {
    const session = useSession()

    if (session.status === 'loading') return null

    return (
        <>
            {children}
        </>
    )
}


export default AuthWrapper