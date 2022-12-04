import React from 'react';
import {ListGroupItem, Form, Button} from "react-bootstrap";
import {ITodo} from "../../data/data";

interface ITodoItem extends ITodo{
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}

const ToDoListItem: React.FC<ITodoItem> = (props) => {

    const {id,title,complete,toggleToDo,removeToDo} = props;

    return (
        <ListGroupItem className={"d-flex justify-content-between"}>
            {title}

            <Form.Check
                type="switch"
                label="Выполнено"
                checked={complete}
                onChange={() => toggleToDo(id)}
            />

            <Button size={"sm"} variant={"danger"} onClick={() => removeToDo(id)}>
                Удалить
            </Button>
        </ListGroupItem>
    );
};

export default ToDoListItem;
