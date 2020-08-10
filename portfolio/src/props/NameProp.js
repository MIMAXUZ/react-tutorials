import React from 'react';     // React needs to be imported
// Here the prop shows us the result by returning the value.

const NameProp = (prop) => {
    return <p>Hi! I'm {prop.name}</p>;
};
export default NameProp;
