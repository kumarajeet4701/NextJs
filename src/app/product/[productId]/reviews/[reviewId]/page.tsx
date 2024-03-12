import { notFound } from "next/navigation";
export default function ReviewDetails({ params }: {
    params: {
        productId: string;
        reviewId: string
    }
}) {
    debugger
        if(parseInt(params.reviewId)>1000){
            notFound()
        }
    return <>
        Review {params.reviewId} Product {params.productId}
    </>
}