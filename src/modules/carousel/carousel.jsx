import "./index.scss";
import React from 'react';

export default function Carousel() {
    return (
        <section className="py-5 carousel">
            <div className="container">
                <img className=" img-thumbnail rounded carousel__img" src="./images/one-piece-red.jpeg" alt="carousel" />
            </div>
        </section>
    );
}
