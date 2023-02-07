import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
    // const deleteContactHandler = (id) => {
    //     props.getContactid(id);
    // };
    //console.log(props)
    function deleteContactHandler(id) {
        props.getContactid(id);
    }
    // const contacts = [
    //     {
    //         id: "1",
    //         name:"shashi",
    //         email:"shashi3@ength.com,"

    //     },
    // ];

    const RenderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    });

    function getSearchTerm(e) {
        props.searchKeyword(e.target.value);
    }
    return (
        <div className="main">
            <div className="add-button-bar">
                <h2>Contact List</h2>
                <Link to="./add">
                    <button className="addbutton">Add Contact</button>
                </Link>
            </div>

            <div className="search-div">
                <input 
                    type="text"
                    placeholder="Search Contacts"
                    value={props.term}
                    onChange={getSearchTerm}
                ></input>
            </div>
            <div>
                {RenderContactList.length > 0
                    ? RenderContactList
                    : "No Contacts available"}
            </div>
        </div>
    );
}
