import React, {useEffect, useRef, useState} from 'react';
import {ITodo} from "../data/data";
import {Alert, Badge, Button, FormControl, InputGroup} from "react-bootstrap";
import ToDoList from "../components/ToDo/ToDoList";
import {Link} from "react-router-dom";

const ToDoPage: React.FC = () => {
    const [error, setError] = useState(false);

    const [value,setValue] = useState("");
    const [todos,setTodos] = useState<ITodo[]>([]);

    //меняем инпут
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    // ref input
    const inputRef = useRef<HTMLInputElement | null>(null);

    const addToDo = () => {
        if(!value){
            setError(true)
            return false;
        }

        setTodos([
            ...todos,
            {
                id: Date.now(),
                title:value,
                complete:false,
            }
        ])
        setValue("")
        setError(false)
    }

    const toggleToDo = (id:number) :void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete:!todo.complete,
            }
        }))
    }
    const removeToDO = (id:number) :void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    useEffect(() => {
        //ecnfyfdkbdftv rhcjh yf bygen gjckt j,yjdktybz
        inputRef.current?.focus();
    },[])

    return (
        <div>
            <Link to={"/"}>Назад</Link>

            <InputGroup size={"sm"}>
                <FormControl ref={inputRef} value={value} onChange={e => handleChange(e)} />
                <Button onClick={addToDo}>Добавить</Button>
            </InputGroup>

            {//alert with errors
                error &&
                <Alert className={"my-2 p-2 smalls"} variant={"danger"}>Ошибка!</Alert>
            }

            <ToDoList toggleToDo={toggleToDo} removeToDo={removeToDO} items={todos} />
        </div>
    );
};

export default ToDoPage;
