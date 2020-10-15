import React, { useEffect, useState } from "react";
import axios from "axios";

export const GetUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonfy.com/users')
      .then(result => setData(result.data));
  }, []);

  console.log(data);
  console.log(data[0]);

  return (
    <div>
      <ul>
        {
            data.map(user => (
                <li key="user.id">
                    {user.name}: {user.name}
                </li>
            ))
        }
      </ul>
    </div>
  );
}



// export const getData = async () => {

//     try {
        
//         const url = 'https://jsonfy.com/users';
//         const resp = await fetch( url );
//         const users = await resp.json();
//         console.log(users);
        
        
//         return users;

//     } catch (error) {
//         console.log(error)
//     }
// }
