import '../styles/globals.css'
import PropTypes from 'prop-types'

import { DEBUG } from '../constants'

function MyApp({ Component, pageProps }) {
  if (DEBUG) {
    console.log("debug")
  }
  return <Component {...pageProps} />
}
MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object
  }

export default MyApp
