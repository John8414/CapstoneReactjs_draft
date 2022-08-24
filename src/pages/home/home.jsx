import React from 'react';
import Schedule from '../../modules/schedule/schedule';
import MovieList from '../../modules/movie-list/movie-list';

export default function Home() {
    return (
        <>
            {/* start thumbnails  */}
            <MovieList />
            {/* start shows schedule  */}
            <Schedule />
        </>
    );
}
