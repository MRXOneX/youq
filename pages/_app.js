import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import AuthWrapper from '../components/AuthWrapper'
import { store } from '../store'
//
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
   <Provider store={store}>
     <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
   </Provider>
  )
}

export default MyApp
