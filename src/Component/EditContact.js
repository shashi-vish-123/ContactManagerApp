import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
export default function EditContact(props) {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(props)
    const { id, name, email } = location.state.contact;
    const [stats, setStats] = React.useState({
        id,
        name,
        email,
    });

    function Update(e) {
        e.preventDefault();
        if (stats.name === "" || stats.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        //console.log(stats)

        props.updateContactHandler(stats);
        setStats(""); //this is used for the clearnig the stats after the adding something
        // history.push("/")
        navigate("/");
        //console.log(props)
    }

    function handlechange(e) {
        const { name, value, type } = e.target;
        setStats((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    return (
        <div>
            <h2 className="addcontact">Edit Contact</h2>
            <form className="forms" onSubmit={Update}>
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
                    <button className="addbutton">Update</button>
                </div>
            </form>
        </div>
    );
}
