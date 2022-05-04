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
                    <Route name="You have landed on my portfolio." index element={<Home />} />
                    <Route name="About" path="/about" element={<About />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
