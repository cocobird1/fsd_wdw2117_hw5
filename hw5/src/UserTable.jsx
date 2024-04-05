import React, { useState, useEffect } from 'react';

function UserTable() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          setUser(data.results[0]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className="user-table">
      {user ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name.first}</td>
              <td>{user.location.city}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default UserTable;
