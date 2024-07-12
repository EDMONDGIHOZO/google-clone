import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home";
import SearchResult from "@/pages/Home/SearchResult";

export default function MainApp() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path="/search-result/:query" element={<SearchResult/>}/>
                {/*since many pages are not done, every unavailable page, can display home.*/}
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}