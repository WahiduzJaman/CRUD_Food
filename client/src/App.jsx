import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/update/:id" element={<UpdatePage/>}/>
                <Route path="/create" element={<CreatePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;