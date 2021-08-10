import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header><Navbar /></header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  );
}

export default MyApp
