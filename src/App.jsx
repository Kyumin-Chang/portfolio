import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project3 from './pages/Project3';
import Project5 from "./pages/Project5.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project/1" element={<Project1/>}/>
                <Route path="/project/2" element={<Home/>}/>
                <Route path="/project/3" element={<Project3/>}/>
                <Route path="/project/4" element={<Home/>}/>
                <Route path="/project/5" element={<Project5/>}/>
            </Routes>
        </>
    );
}

export default App;
