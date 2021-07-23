import { Header } from '../components/Header'

import '../styles/globals.scss'
import { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
