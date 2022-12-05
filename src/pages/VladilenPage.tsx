import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/VladilenPage/ProductCard";
import {IProduct} from "../data/data";

const VladilenPage: React.FC = () => {

    const [products,setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => console.log(setProducts(res.data)))
            .catch(err => console.log(err))
    },[])

    return (
        <div className={'VladilenPage'}>
            <Link to={"/"}>Назад</Link>

            <div className={"d-flex flex-wrap"}>
                {
                    products?.map((product,ids) => (
                        <ProductCard key={ids} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default VladilenPage;
