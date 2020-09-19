import dynamic from "next/dynamic";
import {
    useState,
    useEffect
} from "react";
import useSWR from "swr";
import axios from "axios";
import {
    faArrowAltCircleLeft
} from "@fortawesome/free-regular-svg-icons";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import "../styles/index.scss";
import "../styles/melee-weapon-list.scss";
import "../styles/product-list.scss";

const Layout = dynamic(() => import("../components/Layout"));
const BackgroundFilled = dynamic(() =>
    import("../components/BackgroundFilled")
);
const ProductList = dynamic(() => import("../components/ProductList"));
const CreateForm = dynamic(() => import("../components/CreateForm"));
const InfoBox = dynamic(() => import("../components/InfoBox"));


export default function AccessoryList(props) {
    return(
        <div className="accessory-list-container">
            <p>You are on the Accessory List Page </p>
        </div>
    )
}