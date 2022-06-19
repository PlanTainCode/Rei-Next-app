import { ThemeProvider } from '@mui/system'
import '../styles/globals.scss'
import { theme } from '../theme'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
