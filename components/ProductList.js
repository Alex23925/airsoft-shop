import dynamic from "dynamic/next";
import "../styles/product-list.scss";
import Product from "./Product.js";

export default function ProductList(props) {
    return (
        <div className="product-list">
            <Product
                product={props.minv[0]}
                setHoverStats={props.setHoverStats}
                setHoverEffect={props.setHoverEffect}
                setHoverInfo={props.setHoverInfo}
            />
            <Product
                product={props.minv[1]}
                setHoverStats={props.setHoverStats}
                setHoverEffect={props.setHoverEffect}
                setHoverInfo={props.setHoverInfo}
            />
            <Product
                product={props.minv[2]}
                setHoverStats={props.setHoverStats}
                setHoverEffect={props.setHoverEffect}
                setHoverInfo={props.setHoverInfo}
            />
            <Product
                product={props.minv[3]}
                setHoverStats={props.setHoverStats}
                setHoverEffect={props.setHoverEffect}
                setHoverInfo={props.setHoverInfo}
            />
            <Product
                product={props.minv[4]}
                setHoverStats={props.setHoverStats}
                setHoverEffect={props.setHoverEffect}
                setHoverInfo={props.setHoverInfo}
            />
        </div>
    );
}


