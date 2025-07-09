import { Footer, Navbar } from "../components/component_index";
import { NFTMarketplaceProvider } from "../context/NFTMarketplaceContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;
