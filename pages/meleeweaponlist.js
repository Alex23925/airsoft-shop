import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import useSWR from "swr";

import {
    faArrowAltCircleLeft
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/index.scss";
import "../styles/melee-weapon-list.scss";
import "../styles/product-list.scss";


const BackgroundFilled = dynamic(() =>
    import("../components/BackgroundFilled")
);
const ProductList = dynamic(() => import("../components/ProductList"));
const InfoBox = dynamic(() => import("../components/InfoBox"))

async function fetchMeleeWeaponsRequest() {
    const response = await fetch("/api/meleeweapons");
    const data = await response.json();
    const { meleeweapons } = data;
    return meleeweapons;
}

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function meleeweaponlist() {
    const [currentStats, setCurrentStats] = useState({
        attack: "000",
        accuracy: "000",
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
            attack: st.attack,
            accuracy: st.accuracy,
        })
    }

    let setHoverEffect = (effect) => {
        if(effect !== "none"){
            setHasEffect(true);
        } else {
            setHasEffect(false);
        }
        setCurrentEffect(effect);
    }

    let setHoverInfo = (info) => {
        let inf = info;
        setCurrentInfo(inf);
    }

    // Data fetching

    //SWR 
    const {data, error} = useSWR("/api/meleeweapons", fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return (
        <img
            src="/personaloading.jpg"
            alt="loading image"
            className="loading-img"
        />
    );

    return (
        <div className="page-wrapper">
            <BackgroundFilled />
            <ProductList
                minv={data.meleeweapons}
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
            <InfoBox
                currentStats={currentStats}
                hasEffect={hasEffect}
                currentEffect={currentEffect}
                currentInfo={currentInfo}
            />
        </div>
    );
}
