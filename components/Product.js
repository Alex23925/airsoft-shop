import dynamic from "next/dynamic";
import axios from "axios";
import { useState, useRef } from "react";
import "../styles/product-list.scss";
import { useEffect } from "react";

export default function Product(props) {
    const [hovering, setHovering] = useState(false);
    const nameRef = useRef(null);

    let onClickDelete = () => {
        console.log(props.product);

        axios.delete(`/api/meleeweapons/${props.product.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    let hoverHandler =() => {
        let stats = {
            attack: props.product.attack,
            accuracy: props.product.accuracy,
        };
        props.setHoverStats(stats);

        let effect = props.product.effect;
        props.setHoverEffect(effect);

        let info = props.product.info;
        props.setHoverInfo(info);

        setHovering(true);
    }

    let hoverHandlerLeave = () => setHovering(false);

    const image = props.product.img;
    let prodImg = image === "melee" ? "Knives.png" : "";
    const hide = hovering ? " " : "hide";
    const showColor = hovering ? "quantity-container-color" : "  ";

    let i = props.index+1;
    return (
        <div key={props.product.id} className={"prod" + i + " product-container"} >
            <div
                onMouseEnter={hoverHandler}
                onTouchStart={hoverHandler}
                onMouseLeave={hoverHandlerLeave}
                onTouchEnd={hoverHandlerLeave}
                className={"product product--styles"}
            >
                <div className={hide + " product__innerSq1"}>
                    <button onClick={onClickDelete} className={hide + " delete-btn delete-btn--styles"}>Delete</button>
                </div>
                <div className={hide + " product__innerSq2"}></div>
                <div className="flex product-txt-container product-txt-container--styles">
                    <div className="left-cell">
                        <div className={"img-" + image}>
                            <img src={prodImg} alt="melee"/>
                        </div>
                        <h1 ref={nameRef} className="name">
                            {props.product.name}
                        </h1>
                    </div>
                    <div className="right-cell">
                        <h1 className="price">
                            <span className="yen-symbol">¥ </span>
                            {props.product.price}
                        </h1>
                        <div className={"quantity-container " + showColor}>
                            <h1 className="quantity">
                                <span className="x-symbol">X </span>
                                {props.product.quantity}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
