import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Project1 from "./pages/Project1.jsx";
import Project2 from './pages/Project2.jsx';
import Project3 from './pages/Project3.jsx';
import Project4 from "./pages/Project4.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project/1" element={<Project1/>}/>
                <Route path="/project/2" element={<Project2/>}/>
                <Route path="/project/3" element={<Project3/>}/>
                <Route path="/project/4" element={<Project4/>}/>
            </Routes>
        </>
    );
}

export default App;
