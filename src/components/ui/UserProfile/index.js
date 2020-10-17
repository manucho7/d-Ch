import React from 'react';

export const UserProfile = ({ pepa }) => {

    const { username, email, age, website, phone, date_add } = pepa;

    return (
        <article>
            <h1>Detalle del usuario: </h1>

            <dt> Name: </dt>
            <dd> {username} </dd>

            <dt> Email: </dt>
            <dd> {email} </dd>

            <dt> Age: </dt>
            <dd> {age} </dd>

            <dt> Website: </dt>
            <dd> {website} </dd>

        </article>
    )
}
