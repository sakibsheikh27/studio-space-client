import React from 'react';

const DetailsPage = async({params}) => {
    const {id} = await params;

    const res = await fetch(`http://localhost:5000/studios/${id}`);
    const user = await res.json();
    return (
        <div>
            {user.title}
        </div>
    );
};

export default DetailsPage;