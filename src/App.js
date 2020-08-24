import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ProfileModule from "./Components/Profile/Profile.module";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/Profile' component={ProfileModule}/>
                </div>
            </div>
        </BrowserRouter>


    )
}



export default App;
