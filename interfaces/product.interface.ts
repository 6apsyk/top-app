export interface ProductCharacteristic{
    value: string;
    name: string;
}
export interface ReviewModel{
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt : Date;
}
export interface ProductModel{
    
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: string;
    credit: string;
    oldPrice: string;
    description: string;
    characteristic: ProductCharacteristic[];
    createdAt : Date;
    updatedAt : Date;
    __v: number;
    images: string;
    initialRating: string;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: number;
    advantages: string;
}