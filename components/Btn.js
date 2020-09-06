import Link from "next/link";
import { useState, useEffect } from "react";

export default function Btn(props) {
    const [isHovering, setIsHovering] = useState(false);

    function hoverHandler() {
        setIsHovering(true);
    }

    function hoverHandlerLeave() {
        setIsHovering(false);
    }
    const hide = isHovering ? " " : "hide";
    return (
        <Link
            href={props.path}
        >
            <div className={props.btn + " btn-container"}>
                <div
                    onMouseEnter={hoverHandler}
                    onTouchStart={hoverHandler}
                    onMouseLeave={hoverHandlerLeave}
                    onTouchEnd={hoverHandlerLeave}
                    className={"btn " + props.btnStyles}
                >
                    <div className={hide + " btn__innerSq1"}></div>
                    <div className={hide + " btn__innerSq2"}></div>
                    <div className="sell-txt-container-b4 sell-txt-container-b4--styles">
                        <h1 className="buy-txt">{props.action}</h1>
                        <h1 className="type-txt">{props.selling}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
}
