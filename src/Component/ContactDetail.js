import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
export default function ContactDetail() {
    const location = useLocation();
    // console.log(props)
    const { name, email } = location.state.contact;
    return (
        <div className="detaits">
            <p>{name}</p>
            <p>{email}</p>
            <Link to="/">
                <button className="addbutton">back to list</button>
            </Link>
        </div>
    );
}
