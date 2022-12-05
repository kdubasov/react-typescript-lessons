import React, {useState} from 'react';
import {IProduct} from "../../data/data";
import {Card, Button, Badge} from "react-bootstrap";

interface ProductProps {
    product: IProduct
}
const ProductCard = (props:ProductProps) => {

    const [showInfo,setShowInfo] = useState(false);

    const {id,category,price,description,title,rating,image} = props.product;

    return (
        <Card style={{ width: '18rem', margin: 5 }}>
            <Card.Img variant="top" src={image} style={{width:"50%",margin:"auto"}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>

                    {
                        showInfo &&
                        <div>
                            <p>{description}</p>
                            <div className={"d-flex justify-content-between"}>
                                <h6>Deliveris: <Badge>{rating.count}</Badge></h6>
                                <h6>Mark: <Badge>{rating.rate}/5</Badge></h6>
                            </div>
                        </div>
                    }

                    <Button size={"sm"} variant={showInfo ? "danger" : "success"} onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? "Hide" : "More info"}
                    </Button>
                </Card.Text>
                <Button size={"sm"} variant="primary">${price}</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
