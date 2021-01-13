import React from 'react';

const BenchIndexItem = ({bench: {id, description, lat, lng}}) => {
    return (
        <li>{id}: {description} ({lat}, {lng})</li>
    )
}

export default BenchIndexItem;