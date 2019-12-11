import React from 'react';

const ResultFound = ({iphones}) => {
    return (
        <ul className="result-found-list">
            {
                iphones.map(item => {
                    return (
                        <li key={item.id}>
                          <span>Name: {item.name}</span>
                          <span>Color: {item.color}</span>
                          <span>Capacity: {item.capacity}</span>
                          <span>Price: {item.price}</span>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default ResultFound;