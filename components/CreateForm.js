import "../styles/create-form.scss";
import axios from "axios";
import useSWR, { mutate, trigger } from "swr";
import { useState } from "react";

export default function CreateForm(props) {
    const [itemData, setItemData] = useState({
        img: "melee",
        name: "",
        price: "",
        quantity: "",
        attack: "",
        accuracy: "",
        effect: "",
        multiplier: "",
        info: "",
    });

    const { data, error } = useSWR("/api/meleeweapons");

    let handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        console.log(name + " " + value);
        setItemData({
            ...itemData,
            [name]: value,
        });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();

        mutate("/api/meleeweapons", { ...data, meleeweapon: itemData }, false);
        await axios
            .post("/api/meleeweapons/create", { meleeweapon: itemData })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
        mutate("/api/meleeweapons");
    };

    return (
        <section className="form-container form-container--styles">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={itemData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={itemData.price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="text"
                        name="quantity"
                        value={itemData.quantity}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Attack:
                    <input
                        type="text"
                        name="attack"
                        value={itemData.attack}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Accuracy:
                    <input
                        type="text"
                        name="accuracy"
                        value={itemData.accuracy}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Effect:
                    <input
                        type="text"
                        name="effect"
                        value={itemData.effect}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Multiplier:
                    <input
                        type="text"
                        name="multiplier"
                        value={itemData.multiplier}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Info:
                    <input
                        type="text"
                        name="info"
                        value={itemData.info}
                        onChange={handleChange}
                    />
                </label>
                <button className="sub-btn sub-btn--styles" type="submit">Add</button>
            </form>
        </section>
    );
}
