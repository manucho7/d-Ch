import React, { useEffect, useState } from 'react';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import axios from "axios";

export const UserDetail = () => {

    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        axios
          .get(`https://jsonfy.com/users`)
          .then(result => setData(result.data));
      }, []);
  
    console.log(data);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <Navbar />
            <h1>User Details</h1>
            <hr />

            <form onSubmit={ handleSubmit }>
                <span>Search for a user: </span>
                <input 
                    type="text"
                    onChange={ handleInputChange }
                />
            </form>

            <hr />

            {
                data.map( user => (
                   <li key="user.id">{user.name}</li> 
                ))
            }


            <Footer />
        </div>
    )
}
