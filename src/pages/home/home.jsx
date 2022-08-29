import React from 'react';
import Schedule from '../../modules/schedule/schedule';
import MovieList from '../../modules/movie-list/movie-list';
import Carousel from '../../modules/carousel/carousel';

export default function Home() {
    return (
        <>
            {/* start carousel  */}
            <Carousel />
            {/* start thumbnails  */}
            <MovieList />
        </>
    );
}
