import React from 'react';

export const UserProfile = ({ user }) => {

    const { username, email, age, website, phone } = user;

    return (
        <article>
            <dt> Name: </dt>
            <dd> {username} </dd>

            <dt> Email: </dt>
            <dd> {email} </dd>

            <dt> Age: </dt>
            <dd> {age} </dd>

            <dt> Website: </dt>
            <dd> {website} </dd>

            <dt> Phone: </dt>
            <dd> {phone} </dd>

        </article>
    )
}
