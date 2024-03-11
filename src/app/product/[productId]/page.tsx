export default function ProductDetails({params}:{
    params:{productId:string}
}) {
    return <>
    <h1>This is Product Details {params.productId} </h1>
    </>
}