import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from "axios";

import './index.css';
import {Footer} from '../Footer';
import {UserProfile} from '../UserProfile';
import {ButtonNavigation} from "../ButtonNavigation";

export const UserDetail = () => {
  
  const {id} = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [msgError, setMsgError] = useState('');
  
  
  useEffect(() => {
    axios
    .get(`https://jsonfy.com/users/${id}`)
    .then(result => {
      setIsLoading(false);
      setUser(result.data[0])
    })
    .catch((e) => {
      setMsgError("Ha ocurrido un error en el servidor, contacte el admin");
    })
  }, []);
  
  return (
    <section className="user-detail-page page">
      <div className="content">
        {
          isLoading ? "Loading" : null
        }
        
        {
          msgError ? msgError : null
        }
        <div className="header">
          
          <h1 className="title">User Details</h1>
          
          <ButtonNavigation onClick={() => history.goBack()}/>
        
        </div>
        
        <hr/>
        
        {
          user ? <UserProfile user={user}/> : null
        }
        
        <Footer/>
      </div>
    </section>
  )
}
