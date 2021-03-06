import axios from "axios";
import { useState, useRef } from "react";
import "../styles/product-list.scss";
import useSWR, { mutate, trigger } from "swr";

export default function Product(props) {
    const [hovering, setHovering] = useState(false);
    const [deleted, setDeleted] = useState("");
    const nameRef = useRef(null);
    const {
        data
    } = useSWR(`/api/${props.productsURL}`);

    let onClickDelete = async () => {
        const weapons = data.meleeweapons;
        const deleteUrl = `/api/${props.productsURL}/${props.product.id}`;
        const url = `/api/${props.productsURL}/`;
        setDeleted("deleted");
        await axios.delete(deleteUrl);
    };

    let hoverHandler = () => {
        let stats;
        if(props.product.attack === undefined){
            stats = {
                defense: props.product.defense,
                evasion: props.product.evasion,
            };
        } else {
            stats = {
                attack: props.product.attack,
                accuracy: props.product.accuracy,
            };
        }
        props.setHoverStats(stats);

        let effect = props.product.effect;
        props.setHoverEffect(effect);

        let info = props.product.info;
        props.setHoverInfo(info);

        setHovering(true);
    };

    let hoverHandlerLeave = () => setHovering(false);

    const image = props.product.img;
    let prodImg = "";
    switch (image) {
        case "melee":
            prodImg = "Knives.png";
            break;
        case "range":
            prodImg = "Pistols.png";
            break;
        case "protector":
            prodImg = "Protectors.png";
            break;
        case "accessory":
            prodImg = "Accessories.png";
            break;
    }
    const hide = hovering ? " " : "hide";
    const showColor = hovering ? "quantity-container-color" : "  ";

    let i = props.index + 1;

    return (
        <div
            key={props.product.id}
            className={"prod" + i + " product-container " + deleted}
        >
            <div
                onMouseEnter={hoverHandler}
                onTouchStart={hoverHandler}
                onMouseLeave={hoverHandlerLeave}
                onTouchEnd={hoverHandlerLeave}
                className={"product product--styles"}
            >
                <div className={hide + " product__innerSq1"}>
                    <button
                        onClick={onClickDelete}
                        className={hide + " delete-btn delete-btn--styles"}
                    >
                        Delete
                    </button>
                </div>
                <div className={hide + " product__innerSq2"}></div>
                <div className="flex product-txt-container product-txt-container--styles">
                    <div className="left-cell">
                        <div className={"img-" + image}>
                            <img src={prodImg} alt="melee" />
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
