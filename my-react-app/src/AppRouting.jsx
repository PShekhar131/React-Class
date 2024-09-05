import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import NoContentFound from './components/NoContentFound';
import NavBar from './components/NavBar';


const AppRouting = ()=>{
    return(
        <>
        <Header />
        <NavBar />
        <Routes>
            <Route index Component={Home} />
            <Route Component={Home} path='/Home'/>
            <Route Component={About} path='/About'/>
            <Route Component={Contact} path='/Contact'/>
            <Route Component={NoContentFound} path='*' />
        </Routes>
        <Footer />
        </>
    )
}

export default AppRouting;