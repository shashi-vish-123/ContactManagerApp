import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact(props) {
    const navigate = useNavigate();
    const [stats, setStats] = React.useState({
        name: "",
        email: "",
    });

    function Add(e) {
        e.preventDefault();
        if (stats.name === "" || stats.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        //console.log(stats)

         props.addContactHandler(stats);//this sates contain the name and email id
       setStats({ name: "", email: "" }); //this is used for the clearnig the stats after the adding something
        // history.push("/")
        navigate("/");
        //console.log(props)
    }

    function handlechange(e) {
        const { name, value } = e.target;
        setStats((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    return (
        <div>
            <h2 className="addcontact">Add Contact</h2>
            <form className="forms" onSubmit={Add}>
                <div>
                    <div className="input-div">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={stats.name}
                            onChange={handlechange}
                            className="input-text"
                        />
                    </div>

                    <div className="input-div">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={stats.email}
                            onChange={handlechange}
                            className="input-text"
                        />
                    </div>
                    <button className="Add-button">Add</button>
                </div>
            </form>
        </div>
    );
}
