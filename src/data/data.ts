// todo page
export interface ITodo {
    id: number;
    title:string;
    complete:boolean;
}

// product (valdilen page)
export interface IProduct {
    id: number;
    description:string;
    category:string;
    image:string;
    price:number;
    rating: {
        rate:number,
        count:number,
    };
    title:string;
}
