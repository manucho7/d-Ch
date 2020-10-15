import React, { useEffect, useState } from 'react';

import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { getData } from '../../helpers/getData';


export const HomePage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        let usersJson = getData();

        setUsers( usersJson );
    }, [])

    return (
        <>
            <Navbar />
            <h1>esta es la Home</h1>
            <hr />

            {/* {
                users.map( item => {
                    <li key="item.id">{item.id} - {item.name}</li>
                })
            } */}

            <Footer />
        </>
    )
}
