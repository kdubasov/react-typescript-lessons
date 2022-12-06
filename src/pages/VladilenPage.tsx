import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/VladilenPage/ProductCard";
import {IProduct} from "../data/data";
import {Button} from "react-bootstrap";
import AddProductModal from "../components/VladilenPage/AddProductModal";

const VladilenPage: React.FC = () => {

    const [products,setProducts] = useState<IProduct[]>([]);

    const [showModalAdd, setShowModalAdd] = useState(false)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    },[])

    return (
        <>
            <div className={'VladilenPage'}>
                <Link to={"/"}>Назад</Link>

                <br />

                <Button onClick={() => setShowModalAdd(true)} className={"my-2"} size={"sm"}>
                    Добавить товар
                </Button>

                <div className={"d-flex flex-wrap"}>
                    {
                        products?.map((product,ids) => (
                            <ProductCard key={ids} product={product} />
                        ))
                    }
                </div>
            </div>

            <AddProductModal show={showModalAdd} onHide={() => setShowModalAdd(false)} />
        </>
    );
};

export default VladilenPage;
