export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    roles: string[]
}


export interface CarouselItem {
    id: string;
    title1: string;
    title2: string;
    descreption: string;
    imgUrl: string;
    createdAt: Date;
}


export interface Product {
    id: string
    title: string
    description: string
    price: number
    oldPrice: number
    rating: number
    imgUrl: string
}

export interface Category {
    name: string
    id: string
}