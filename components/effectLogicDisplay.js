import React from "react";

export function haveEffect(effect) {
    return (
        <div className="effects-container">
            <h1 className="effect effects--styles">{effect}</h1>
        </div>
    );
}

export function noEffect() {
    return (
        <div className="dashes-container">
            <h1 className="dashes dashes--styles">--------</h1>
        </div>
    );
}

export default function EffectDisplay(props) {
    let effectDisplay;
    if (props.hasEffect === true) {
        effectDisplay = haveEffect(props.effect);
        return effectDisplay;
    } else {
        effectDisplay = noEffect();
        return effectDisplay;
    }
}
