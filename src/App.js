import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {

  const [getContacts, setContacts] = useState(contacts.slice(0, 5));

  return (

    <div className="App">

        <h1>IronContacts</h1>
      <table className="contacTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {getContacts.map((contact) => {
            return (
              <tr>
                <td className="contactPic">
                  <img
                    className="contactImg"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td className="contactName">{contact.name}</td>
                <td className="contactPop">{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     
    </div>
  );
}

export default App;
