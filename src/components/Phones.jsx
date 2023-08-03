import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <div>
            {
                phones.map(phone => <Link key={phone.id} to={`/phone/${phone.id}`}>
                    <li>{phone.name}</li></Link>)
            }
        </div>
    );
};

export default Phones;