import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* TODO: add surface class for elevation and box-shadows */}
      <header className="flex center global-padding primary">
        <Navbar />
      </header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  );
}

export default MyApp
