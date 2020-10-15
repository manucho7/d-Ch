import React, { useEffect, useState } from 'react';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import axios from "axios";

export const UserDetail = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`https://jsonfy.com/users`)
          .then(result => setData(result.data));
      }, []);
  
      console.log(data);
      console.log(data[0]);

    return (
        <div>
            <Navbar />
            <h1>User Details</h1>
            <hr />

            {
                data.map( user => (
                   <li>{user.name}</li> 
                ))
            }


            <Footer />
        </div>
    )
}
