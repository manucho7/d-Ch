import React from 'react';

import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { GetUser } from '../../helpers/GetUser';



export const HomePage = () => {
    const { data } = GetUser();
    // const [users, setUsers] = useState([]);

    // useEffect(() => {

    //     let usersJson = getData();

    //     setUsers( usersJson );
    // }, [])


    return (
        <>
            <Navbar />
            <h1>esta es la Home</h1>
            <hr />
            {
                data
            }

            <Footer />
        </>
    )
}
