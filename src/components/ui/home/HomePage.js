import React, { useEffect, useState } from 'react';

import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { getData } from '../../helpers/getData';


export const HomePage = () => {

    const [state, setState] = useState({
        users: [],
        loading: true
    });

    useEffect(() => {

        getData()
            .then( users => {

                setState({
                    data: users,
                    loading: false
                })

            }
    )}, [])



    return (
        <>
            <Navbar />
            <h1>esta es la Home</h1>
            <hr />

            <Footer />
        </>
    )
}
