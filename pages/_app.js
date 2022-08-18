import { withTRPC } from '@trpc/next'
import superjson from 'superjson'
import { SessionProvider } from 'next-auth/react'
//
import moment from 'moment'
//
import { ToastContainer } from 'react-toastify';
//
import 'moment/locale/ru'
moment.locale('ru')
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


function getBaseUrl() {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}
export default withTRPC({
  config({ ctx }) {
    
    
    const url = `${getBaseUrl()}/api/trpc`

    return {
      url,
      transformer: superjson
    }
  },

  ssr: false
})(MyApp)


