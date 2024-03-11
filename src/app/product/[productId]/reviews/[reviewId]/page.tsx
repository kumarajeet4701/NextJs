export default function ReviewDetails({ params }: {
    params: {
        productId: string;
        reviewId: string
    }
}) {
    return <>
        Review {params.reviewId} Product {params.productId}
    </>
}