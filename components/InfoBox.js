import { useState } from "react";
import dynamic from "next/dynamic";

const EffectDisplay = dynamic(() => import("./effectLogicDisplay"));

export default function InfoBox(props) {
    const [effect, setEffect] = useState(props.currentEffect);
    const [hasEffect, setHasEffect] = useState(false);

    if (effect !== "none") {
        setHasEffect(true);
    }

    return (
        <div className="infoBox-container">
            <div className="infoBox-outer">
                <div className="infoBox-inner"></div>
            </div>
            <div className="infoAttack-container">
                <div className="infoBox-attack-bg"></div>
                <div className="infoBox-attack"></div>
                <div className="attack-txt-container">
                    <div className="attack-txt attack-txt--styles">ATTACK</div>
                    <div className="attack-nums attack-nums--styles">
                        <div className="attack-num">
                            {props.currentStats.attack}
                        </div>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className="infoAccuracy-container">
                <div className="infoBox-accuracy-bg"></div>
                <div className="infoBox-accuracy"></div>
                <div className="accuracy-txt-container">
                    <div className="accuracy-txt accuracy-txt--styles">
                        ACCURACY
                    </div>
                    <div className="accuracy-nums accuracy-nums--styles">
                        <div className="accuracy-num">
                            {props.currentStats.accuracy}
                        </div>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className="effect-info-container">
                <h1 className="effect-txt effect-txt--styles">EFFECT</h1>
                <h1 className="info-txt info-txt--styles">INFO</h1>
            </div>

            <EffectDisplay hasEffect={hasEffect} effect={effect} />

            <div className="currentInfo-container">
                <h1 className="currentInfo currentInfo--styles">
                    {props.currentInfo}
                </h1>
            </div>
        </div>
    );
}
