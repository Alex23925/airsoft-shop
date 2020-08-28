import dynamic from  "next/dynamic";

import "../styles/btn-positions.scss";

const Btn = dynamic(() => import("../components/Btn"));

export default function DesktopNavbar(props) {
    return (
        <div className="navbar navbar--styles">
            <div className="btn1">
                <Btn
                    path="/meleeweaponlist"
                    btn="btn-pos1"
                    btnStyles="btn--styles"
                    action="BUY"
                    selling="MELEE WEAPONS"
                ></Btn>
                <Btn
                    path="/rangeweaponlist"
                    btn="btn-pos2"
                    btnStyles="btn--styles"
                    action="BUY"
                    selling="RANGE WEAPONS"
                ></Btn>
                <Btn
                    path="/protectorlist"
                    btn="btn-pos3"
                    btnStyles="btn--styles"
                    action="BUY"
                    selling="PROTECTOR"
                ></Btn>
                <Btn
                    path="/accessorylist"
                    btn="btn-pos4"
                    btnStyles="btn--styles"
                    action="BUY"
                    selling="ACCESSORY"
                ></Btn>
                <Btn
                    path="/sell"
                    btn="btn-pos5"
                    btnStyles="btn-sell--styles"
                    action="SELL"
                    selling=""
                ></Btn>
            </div>
        </div>
    )
}