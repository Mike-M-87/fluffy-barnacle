import Script from 'next/script'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Script src="https://kit.fontawesome.com/6be82c378c.js" crossOrigin="anonymous"></Script>
    <Component {...pageProps} />
  </>)
}