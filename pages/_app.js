import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="surface-16">
        <Navbar />
      </header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  );
}

export default MyApp
