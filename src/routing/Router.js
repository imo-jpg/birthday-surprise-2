import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Individual from "../individual/Individual";

function AppRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individual" element={<Individual />} />
        </Routes>
    )
}

export const AppRouter = AppRouting;