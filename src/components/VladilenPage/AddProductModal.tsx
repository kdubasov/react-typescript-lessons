import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap"
import {IProduct} from "../../data/data";
import axios from "axios";

//для пропсов
interface IAddProductModal{
    onHide: () => void;
    show: boolean;
}

//для стейта с добавлением товара
interface IAddObject {
    title:string;
    price:string;
    description:string;
    image:string;
    category:string;
}

const AddProductModal: React.FC<IAddProductModal> = ({onHide,show}) => {

    const [value,setValue] = useState<IAddObject>({
        title:'',
        price:'',
        description:'',
        image:'',
        category:'',
    })

    const handleChange = (input: string, valueInput: string) => {
        const copy  = Object.assign({}, value);
        // @ts-ignore
        copy[input] = valueInput;
        setValue(copy);
    }

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault()

        await axios.post<IAddObject>("https://fakestoreapi.com/products",value)
            .then(() => alert("Товар добавлен"))

        setValue({
            title:'',
            price:'',
            description:'',
            image:'',
            category:'',
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSend}>
                    <FormControl
                        required
                        value={value.title}
                        onChange={e => handleChange('title',e.target.value)}
                        placeholder="enter title"
                    />
                    <FormControl
                        required
                        value={value.price}
                        onChange={e => handleChange('price',e.target.value)}
                        placeholder="enter price"
                    />
                    <FormControl
                        required
                        value={value.description}
                        onChange={e => handleChange('description',e.target.value)}
                        placeholder="enter description"
                    />
                    <FormControl
                        required
                        value={value.image}
                        onChange={e => handleChange('image',e.target.value)}
                        placeholder="enter image"
                    />
                    <FormControl
                        required
                        value={value.category}
                        onChange={e => handleChange('category',e.target.value)}
                        placeholder="enter category"
                    />
                    <Button type={"submit"} size={"sm"}>Send</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddProductModal;
