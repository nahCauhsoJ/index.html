import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./Views/Layout.js";
import Home from "./Views/Home.js";
import About from "./Views/About.js";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
