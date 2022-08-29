import React, { useState } from 'react';
import './index.scss';

export default function Chairs(props) {
    const [isSelecting, setIsSelecting] = useState(false);

    const populateClass = () => {
        let defaultClass = 'seat';

        if (props.item.loaiGhe === "Vip") {
            defaultClass += " Vip";
        }

        if (isSelecting) {
            defaultClass += " selecting";
        }

        if (props.item.daDat) {
            defaultClass += ` daDat`;
        }

        return defaultClass;
    };
    return (
        <button
            key={props.item.tenGhe}
            disabled={props.item.daDat}
            onClick={() => {
                setIsSelecting(!isSelecting);
                props.handleSelectingSeat(props.item);
            }}
            className={populateClass()}>
            {props.item.tenGhe}
        </button >
    );
}
