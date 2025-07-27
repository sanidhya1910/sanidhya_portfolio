import '@styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Application
