import dynamic from "next/dynamic";
import {
    useState,
    useEffect
} from "react";
import useSWR from "swr";
import axios from "axios";
import {
    faArrowAltCircleLeft
} from "@fortawesome/free-regular-svg-icons";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import "../styles/index.scss";
import "../styles/melee-weapon-list.scss";
import "../styles/product-list.scss";

const Layout = dynamic(() => import("../components/Layout"));
const BackgroundFilled = dynamic(() =>
    import("../components/BackgroundFilled")
);
const ProductList = dynamic(() => import("../components/ProductList"));
const CreateProtectorForm = dynamic(() => import("../components/CreateProtectorForm"));
const InfoBox = dynamic(() => import("../components/InfoBox"));


export default function protectorlist() {
    const [currentStats, setCurrentStats] = useState({
        defense: "000",
        evasion: "000",
    });
    const [currentEffect, setCurrentEffect] = useState(" ");
    const [currentInfo, setCurrentInfo] = useState(" ");
    const [hasEffect, setHasEffect] = useState(false);
    const [isBackHovering, setIsBackHovering] = useState(false);

    //functions
    let goBack = () => window.history.back();

    let setHoverStats = (stats) => {
        let st = stats;
        setCurrentStats({
            defense: st.defense,
            evasion: st.evasion,
        });
    };

    let setHoverEffect = (effect) => {
        if (effect !== "none") {
            setHasEffect(true);
        } else {
            setHasEffect(false);
        }
        setCurrentEffect(effect);
    };

    let setHoverInfo = (info) => {
        let inf = info;
        setCurrentInfo(inf);
    };

    // Data fetching

    //SWR
    const { data, error } = useSWR("/api/protectors");

    if (error) return <div>failed to load</div>;
    if (!data)
        return (
            <img
                src="/personaloading.jpg"
                alt="loading image"
                className="loading-img"
            />
        );

    return (
        <Layout>
            <BackgroundFilled />
            <ProductList
                minv={data.protectors}
                productsURL={"protectors"}
                setHoverStats={setHoverStats}
                setHoverEffect={setHoverEffect}
                setHoverInfo={setHoverInfo}
            />
            <div className={"btn__back-container"}>
                <FontAwesomeIcon
                    className="fa-3x btn__back"
                    icon={faArrowAltCircleLeft}
                    onClick={goBack}
                />
            </div>
            <CreateProtectorForm />
            <InfoBox
                currentStats={currentStats}
                hasEffect={hasEffect}
                currentEffect={currentEffect}
                currentInfo={currentInfo}
            />
        </Layout>
    );
}

