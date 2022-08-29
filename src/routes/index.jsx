import React from 'react';
import { useRoutes } from 'react-router-dom';
import AuthGaurd from '../guards/auth.guard';
import NoAuthGaurd from '../guards/no-auth.gaurd';
import HomeLayout from '../layouts/home/home';
import Booking from '../pages/booking/booking';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import MovieDetail from '../pages/movie-detail/movie-detail';

export default function Router() {

    const routing = useRoutes([

        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/movie/:movieId',
                    element: <MovieDetail />,
                },
                {
                    path: '/',
                    element: <AuthGaurd />,
                    children: [
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking />,

                        }
                    ]
                },
                {
                    path: '/',
                    element: <NoAuthGaurd />,
                    children: [
                        {
                            path: '/login',
                            element: <Login />,
                        },
                    ]
                },
            ]
        },

    ]);


    return routing;
}