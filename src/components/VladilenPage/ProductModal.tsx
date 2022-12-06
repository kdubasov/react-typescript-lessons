import React from 'react';
import {Badge, Modal} from "react-bootstrap";
import {IProduct} from "../../data/data";

interface IProductModal{
    show:boolean,
    onHide:() => void,
    data:IProduct,
}

const ProductModal: React.FC<IProductModal> = ({show,onHide,data}) => {

    console.log(data)

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
                    {data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className={"small m-0"}>Category: <Badge>{data.category}</Badge></p>
                <p className={"small m-0"}>Price: <Badge>{data.price}$</Badge></p>
                <p className={"small m-0"}>Rate: <Badge>{data.rating.rate}</Badge></p>
                <p className={"small m-0"}>Zakaz: <Badge>{data.rating.count}</Badge></p>
                <p className={"small m-0"}>
                    <strong>Description:</strong><br />
                    {data.description}
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
