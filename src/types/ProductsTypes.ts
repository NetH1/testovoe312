export type productsType = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image: string,
    rating: ratingType
}
export type ratingType = {
    rate:number,
    count:number
}