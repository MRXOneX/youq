import { withTRPC } from '@trpc/next'
import superjson from 'superjson'
import { SessionProvider } from 'next-auth/react'
// components
import AuthWrapper from '../components/AuthWrapper'
//
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  )
}


export default withTRPC({
  config({ ctx }) {


    const url = 'http://localhost:3000/api/trpc'

    return {
      url,
      transformer: superjson
    }
  },

  ssr: true
})(MyApp)


