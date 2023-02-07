import React from "react";

import { Link } from "react-router-dom";
export default function ContactCard(props) {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <div className="content">
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <p>{name}</p>
                    <p>{email}</p>
                </Link>
            </div>
           

            <Link to={"/edit"} state={{ contact: props.contact }}>
                <button
                    className="edit-button"
                    //onClick={() => props.clickHandler(id)}
                >
                    Edit
                </button>
            </Link>

            <button
                className="del-button"
                onClick={() => props.clickHandler(id)}
            >
                delete
            </button>
        </div>
    );
}
