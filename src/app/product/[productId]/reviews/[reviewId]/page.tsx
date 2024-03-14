"use client"
import { notFound } from "next/navigation";

function getRanddomNumber(count :number){
    return Math.floor(Math.random()* count)
}
export default function ReviewDetails({ params }: {
    params: {
        productId: string;
        reviewId: string
    }
}) {
    
        if(parseInt(params.reviewId)>1000){
            notFound()
        }

const random=getRanddomNumber(2)
        if(random===1){
            throw new Error("Error Loading product review ")
        }
    return <>
        Review {params.reviewId} Product {params.productId}
    </>
}