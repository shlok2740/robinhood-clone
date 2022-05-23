import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { RobinhoodProvider } from "../context/RobinhoodContext";

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            // This should be in a .env file
            serverUrl="https://41hmmwu9jqas.usemoralis.com:2053/server"
            appId="Tp3LE4a1z3VQjLaZ1Z27BU69kf7oBZ48bHq70vZY"
        >
            <RobinhoodProvider>
                <Component {...pageProps} />
            </RobinhoodProvider>
        </MoralisProvider>
    );
}

export default MyApp;
