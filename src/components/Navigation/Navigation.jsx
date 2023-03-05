import React from "react"
import { Routes, Route } from "react-router-dom";
import Price from "../Price/Price"
import Main from "../Main/Main"
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Politica from "../Politica/Politica";
import Dogovor from "../Dogovor/Dogovor";

const Navigation = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/price" element={<Price/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/politica" element={<Politica/>}/>
            <Route path="/dogovor_vozvrata" element={<Dogovor/>}/>

        </Routes>
    )
}

export default Navigation