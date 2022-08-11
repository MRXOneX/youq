import { withTRPC } from '@trpc/next'
import superjson from 'superjson'
import { SessionProvider } from 'next-auth/react'
//
import { ToastContainer } from 'react-toastify';
// components
import AuthWrapper from '../components/AuthWrapper'
//
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <Component {...pageProps} />
        <ToastContainer />
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


