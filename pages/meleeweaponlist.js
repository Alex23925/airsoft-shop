import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useQuery, useMutation, queryCache } from "react-query";

import "../styles/index.scss";
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

export default function meleeweaponlist() {
    const [currentStats, setCurrentStats] = useState({
        attack: "000",
        accuracy: "000",
    });
    const [currentEffect, setCurrentEffect] = useState("");
    const [currentInfo, setCurrentInfo] = useState("");
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

    console.log(currentStats);

    let setHoverEffect = (effect) => {
        let eff = effect;
        setCurrentEffect(eff);
    }

    let setHoverInfo = (info) => {
        let inf = info;
        setCurrentInfo(inf);
    }

    // Data fetching
   
    const { status, data, error } = useQuery(
        "meleeweapons",
        fetchMeleeWeaponsRequest
    );

    if (status === "loading") {
        return <span> Loading... </span>;
    }

    if (status === "error") {
        return <span> Error: {error.message} </span>;
    }

    //console.log(data);

    return (
        <div className="page-wrapper">
            <BackgroundFilled />
            <ProductList 
                minv={data}
                setHoverStats={setHoverStats}
                setHoverEffect={setHoverEffect}
                setHoverInfo={setHoverInfo}
            />  
        </div>
    );
}
