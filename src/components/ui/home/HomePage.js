import React from 'react';

import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { GetUser } from '../../helpers/GetUser';



export const HomePage = () => {

    const { users } = GetUser();

    return (
        <>
            <Navbar />
            <h1>esta es la Home</h1>
            <hr />
            {
                users
            }

            <Footer />
        </>
    )
}
