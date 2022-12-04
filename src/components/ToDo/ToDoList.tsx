import React from 'react';
import {ListGroup} from "react-bootstrap";
import {ITodo} from "../../data/data";
import ToDoListItem from "./ToDoListItem";

interface ITodoList {
    items: ITodo[];
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}

const ToDoList: React.FC<ITodoList> = (props) => {

    return (
        <ListGroup className={"my-2"}>
            {
                props.items.map(item => (
                    <ToDoListItem
                        key={item.id}
                        toggleToDo={props.toggleToDo}
                        removeToDo={props.removeToDo}
                        {...item}
                    />
                ))
            }
        </ListGroup>
    );
};

export default ToDoList;
