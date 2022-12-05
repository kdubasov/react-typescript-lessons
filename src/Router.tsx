import React from 'react';
import {Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Container} from "react-bootstrap";
import ToDoPage from "./pages/ToDoPage";
import VladilenPage from "./pages/VladilenPage";

const Router: React.FC = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/todo" element={<ToDoPage />} />
                <Route path="/minin" element={<VladilenPage />} />
            </Routes>
        </Container>
    );
};

export default Router;
