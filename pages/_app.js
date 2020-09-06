import useSWR, { SWRConfig } from "swr";

import "../styles/reset.scss";
import "../styles/fenceAnimation.scss";
import "../styles/sign.scss";

function MyApp({ Component, pageProps }) {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: (resource, init) =>
                    fetch(resource, init).then((res) => res.json()),
            }}
        >
            <Component {...pageProps} />
        </SWRConfig>
    );
}

export default MyApp;
