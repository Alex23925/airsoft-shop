import dynamic from "next/dynamic";

const Product = dynamic(() => import("./Product"));

export default function ProductList(props) {
    return (
        <div className="product-list">
            {props.minv.map((item) => (
                <Product
                    product={item}
                    setHoverStats={props.setHoverStats}
                    setHoverEffect={props.setHoverEffect}
                    setHoverInfo={props.setHoverInfo}
                />
            ))}
        </div>
    );
}
