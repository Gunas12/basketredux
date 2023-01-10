
import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { store } from '../config/store';
function Index() {
    return (
        <>

            <Provider store={store}>
                <Navbar />
                <Outlet />
            </Provider>



        </>
    )
}

export default Index