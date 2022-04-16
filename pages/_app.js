import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { RobinhoodProvider } from "../context/RobinhoodContext";

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            // This should be in a .env file
            serverUrl="https://my05ajgwzxgv.usemoralis.com:2053/server"
            appId="41C6iXLhtDiASp6rg2W7srPoaEKYo7kskHwgVGiK"
        >
            <RobinhoodProvider>
                <Component {...pageProps} />
            </RobinhoodProvider>
        </MoralisProvider>
    );
}

export default MyApp;
