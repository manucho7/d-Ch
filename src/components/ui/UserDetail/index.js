import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { UserProfile } from '../UserProfile';

export const UserDetail = () => {

    const { id } = useParams();
    const history = useHistory();
    const [ user, setUser ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ msgError, setMsgError ] = useState('');


    useEffect(() => {
        axios
          .get(`https://jsonfy.com/users/${ id }`)
          .then(result => {
              setIsLoading(false);
              setUser(result.data[0])})
          .catch( (e) =>{
            setMsgError( "Ha ocurrido un error en el servidor, contacte el admin" );
          })
    }, []);
  
    return (
        <div>
            <Navbar />

            {
                isLoading ? "Loading" : null
            }

            {
                msgError ? msgError : null
            }


            <button
                onClick={ () => history.goBack() }
            >
                back
            </button>

            <h1>User Details</h1>
            <hr />

            {
                user ? <UserProfile user={user}/> : null
            }

            <Footer />
        </div>
    )
}
