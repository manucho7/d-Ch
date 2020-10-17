import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import axios from "axios";

import './homepage.css';

export const HomePage = () => {
    
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
      axios
        .get('https://jsonfy.com/users')
        .then(result => { 
            setUsers(result.data);
            setIsLoading( false );
        });

    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <section className="home-page">
            <Navbar />

            <h1 className="title">Desitec challenge</h1>
            <hr />

            <form className="search" onSubmit={ handleSubmit }>
                <span>Search for a user: </span>
                <input 
                    type="text"
                    onChange={ handleInputChange }
                />
            </form>

            <hr />

            {
                isLoading ? "Loading" : ""
            }

            <ul className="user-list">
                {
                    users.filter(user => {
                         if (inputValue === '') {
                             return true
                         } else {
                             return user.name.toLowerCase().includes(inputValue);
                         }
                    })
                        .map(user => (
                        <li className="user-list-item"
                            key={user.id}
                            onClick={ () => {
                                history.push( `/${ user.id }`  )
                            }}
                        >
                            {user.id}: {user.name}
                        </li>
                    ))
                }
            </ul>
            

            <Footer />
        </section>
    )
}
