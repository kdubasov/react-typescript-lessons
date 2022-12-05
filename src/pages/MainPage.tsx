import React from 'react';
import {Badge, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";


const MainPage: React.FC = () => {

    return (
        <div>
            <h2><Badge>Главная страница (ToDo)</Badge></h2>

            <ListGroup>
                <ListGroupItem><Link to={"/todo"}>ToDo лист</Link></ListGroupItem>
                <ListGroupItem><Link to={"/minin"}>Уроки Владилена Минина</Link></ListGroupItem>
            </ListGroup>

        </div>
    );
};

export default MainPage;
