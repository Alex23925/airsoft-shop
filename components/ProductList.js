import dynamic from "next/dynamic";
import { useState,  useEffect } from "react";

const Product = dynamic(() => import("./Product"));

export default function ProductList(props) {    
    useEffect(() => {

    });

    return (
        <div className="product-list">
            {props.minv.map((item) => (
                <Product
                    product={item}
                    productsURL={props.productsURL}
                    index={props.minv.indexOf(item)}
                    setHoverStats={props.setHoverStats}
                    setHoverEffect={props.setHoverEffect}
                    setHoverInfo={props.setHoverInfo}
                />
            ))}
        </div>
    );
}
