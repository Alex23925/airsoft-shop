import "../styles/create-form.scss";
import axios from "axios";
import useSWR, { mutate, trigger } from "swr";
import { useState } from "react";

export default function CreateProtectorForm(props) {
    const [itemData, setItemData] = useState({
        img: "protector",
        name: "",
        price: "",
        quantity: "",
        defense: "",
        evasion: "",
        multiplier: "",
        info: "",
    });

    const { data, error } = useSWR("/api/protectors");

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

        mutate("/api/protectors", { ...data, protector: itemData }, false);
        await axios
            .post("/api/protectors/create", {
                protector: itemData
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
        mutate("/api/protectors");
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
                    Defense:
                    <input
                        type="text"
                        name="defense"
                        value={itemData.defense}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Evasion:
                    <input
                        type="text"
                        name="evasion"
                        value={itemData.evasion}
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
                <button className="sub-btn sub-btn--styles" type="submit">
                    Add
                </button>
            </form>
        </section>
    );
}
