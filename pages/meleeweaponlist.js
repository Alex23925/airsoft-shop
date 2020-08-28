import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useQuery, useMutation, queryCache } from "react-query";

const BackgroundFilled = dynamic(() =>
    import("../components/BackgroundFilled")
);

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

    const {status, data, error } = useQuery(
        "meleeweapons",
        fetchMeleeWeaponsRequest
    );
    
    if (status === 'loading') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className="page-wrapper">
            <BackgroundFilled />
            <ol>
              {data.map(meleeweapon => (
                  <li key={meleeweapon.id}>{meleeweapon.img}</li>
              ))}  
            </ol>
        </div>
    );
}

