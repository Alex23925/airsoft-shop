import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles/info-box.scss";
const EffectDisplay = dynamic(() => import("./effectLogicDisplay"));

export default function InfoBox(props) {
    let displayStats = "";

    let effect = props.currentEffect;
    let hasEffect = props.hasEffect;
    let currentLeftStat =
        props.currentStats.attack === undefined
            ? props.currentStats.defense
            : props.currentStats.attack;
    let currentRightStat =
        props.currentStats.accuracy === undefined
            ? props.currentStats.evasion
            : props.currentStats.accuracy;

    let leftStatTitle =
        props.currentStats.attack === undefined ? "Defense" : "Attack";
    let RightStatTitle =
        props.currentStats.accuracy === undefined ? "Evasion" : "Accuracy";

    if (props.currentStats.attack === undefined && props.currentStats.defense === undefined){
        displayStats="hide"
    }
    
    return (
        <div className="infoBox-container">
            <div className="infoBox-outer">
                <div className="infoBox-inner"></div>
            </div>
            <div className={displayStats + " infoAttack-container"}>
                <div className="infoBox-attack-bg"></div>
                <div className="infoBox-attack"></div>
                <div className="attack-txt-container">
                    <div className="attack-txt attack-txt--styles">{leftStatTitle}</div>
                    <div className="attack-nums attack-nums--styles">
                        <div className="attack-num">{currentLeftStat}</div>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className={displayStats + " infoAccuracy-container"}>
                <div className="infoBox-accuracy-bg"></div>
                <div className="infoBox-accuracy"></div>
                <div className="accuracy-txt-container">
                    <div className="accuracy-txt accuracy-txt--styles">
                        {RightStatTitle}
                    </div>
                    <div className="accuracy-nums accuracy-nums--styles">
                        <div className="accuracy-num">{currentRightStat}</div>
                        <i className="fas fa-arrow-right"></i>
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
