import React, { useEffect } from "react";
import Header from "./Component/Header";
import AddContact from "./Component/AddContact";
import ContactList from "./Component/ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactDetail from "./Component/ContactDetail";
import "./index.css"
import EditContact from "./Component/EditContact";
export default function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = React.useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
      );
    const [searchTerm, setsearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const addContactHandler = (contact) => {
       // console.log(contact);
        setContacts([...contacts, { id: uuid(), ...contact }]);
      };
    
    
    function updateContactHandler(contact) {
       

    }

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
          return contact.id !== id;
        });
    
        setContacts(newContactList);
      };

    const searchHandler = (searchTerm) => {
        setsearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newContactList = contacts.filter((contact) => {
                return Object.values(contact)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setSearchResults(newContactList);
        } else {
            setSearchResults(contacts);
        }
    };
    //
    useEffect(() => {
        const retriveContacts = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_KEY)
        );
        if (retriveContacts) setContacts(retriveContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div>
            <BrowserRouter>
                <Header />

                {/* <Switch> */}
                <Routes>
                    <Route
                        path="/add"
                        element={
                            <AddContact addContactHandler={addContactHandler} />
                        }
                    ></Route>

                    <Route
                        path="/"
                        element={
                            <ContactList
                                contacts={
                                    searchTerm.length < 1
                                        ? contacts
                                        : searchResults
                                }
                                getContactid={removeContactHandler}
                                term={searchTerm}
                                searchKeyword={searchHandler}
                            />
                        }
                    ></Route>

                    <Route
                        path="/contact/:id"
                        element={<ContactDetail />}
                    ></Route>

                    <Route
                        path="/edit"
                        element={
                            <EditContact
                                updateContactHandler={updateContactHandler}
                            />
                        }
                    ></Route>
                </Routes>
                {/* </Switch> */}
            </BrowserRouter>

            {/* 
            <AddContact addContactHandler={addContactHandler} />
            <ContactList
                contacts={contacts}
                getContactid={removeContactHandler}
            /> */}
        </div>
    );
}
