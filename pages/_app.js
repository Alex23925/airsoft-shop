import useSWR, { SWRConfig } from "swr";

import "../styles/reset.scss";
import "../styles/fenceAnimation.scss";
import "../styles/sign.scss";

function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    
    );
}

export default MyApp;
