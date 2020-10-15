import React, { useEffect, useState } from 'react';

import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import axios from "axios";

export const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get('https://jsonfy.com/users')
        .then(result => setData(result.data));
    }, []);

    console.log(data);
    console.log(data[0]);

    return (
        <>
            <Navbar />
            <h1>esta es la Home</h1>
            <hr />

            <ul>
                {
                    data.map(user => (
                        <li key="user.id">
                            {user.id}: {user.name}
                        </li>
                    ))
                }
            </ul>

            <Footer />
        </>
    )
}
