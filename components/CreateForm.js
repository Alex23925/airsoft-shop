import useSWR from "swr";

import "../styles/create-form.scss";

export default function CreateForm(props) {
    let handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.name.value);
    };

    let handleChange = (e) => {};

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </section>
    );
}
