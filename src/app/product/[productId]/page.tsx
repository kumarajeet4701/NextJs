import { Metadata } from "next"
type Props = {
    params: {
        productId: string
    }
}
export const generateMetadata = async ({ params }: Props): Promise <Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`i Phone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}

export default function ProductDetails({ params }: Props) {
    return <>
        <h1>This is Product Details {params.productId} </h1>
    </>
}