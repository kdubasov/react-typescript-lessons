import React from 'react';
import {Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Container} from "react-bootstrap";

const Router: React.FC = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Container>
    );
};

export default Router;
