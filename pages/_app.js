import { Navbar } from "../components/component_index";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar/>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
