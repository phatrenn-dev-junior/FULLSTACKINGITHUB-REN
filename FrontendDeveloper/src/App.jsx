import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';

// React Router

import Aboute from "./practice/01-Master-Foundations/01-1.4Router/pages/Aboute";
import Services from "./practice/01-Master-Foundations/01-1.4Router/pages/Server";
import Navbar from "./practice/01-Master-Foundations/01-1.4Router/pages/Navbar";
import NotFound from "./practice/01-Master-Foundations/01-1.4Router/pages/NotFound";
import Home from "./practice/02-api-fetching/Home";
import ProductDetail from "./practice/02-api-fetching/ProductDetail";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
        <Route path="/" element={<Home />} />
        {/* :id គឺជានិមិត្តសញ្ញាសម្រាប់ចាប់យក ID ខុសៗគ្នានៃផលិតផល */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
            {/* <Routes>
             
                <Route path="/about" element={<Aboute />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes> */}
        </BrowserRouter>
    );
}

export default App;