import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Individual from "../individual/Individual";
import Records from "../records/Records";
import Photos from "../photos/Photos";
import OneStack from "../stack/OneStack";




function AppRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/records" element={<Records />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/stack" element={<OneStack />} />
        </Routes>
    )
}

export const AppRouter = AppRouting;