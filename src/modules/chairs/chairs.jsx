import React from 'react';
import './index.scss';

export default function Chairs(props) {
    const populateClass = () => {
        let defaultClass = 'seat';

        return defaultClass;
    };
    return (
        <button
            className='seat'
        >
            {props.item.tenGhe}
        </button>
    );
}
