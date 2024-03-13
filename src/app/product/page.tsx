import Link from "next/link"
const Product = () => {
  return (<>
    <div>Product</div>
    <><Link href={"/"}>Goto Home</Link></>
    <>

      <Link href={"product/1"}>Product 1 </Link>
      <Link href={"product/2"}>Product 2 </Link>
      <Link href={"product/3"} replace>Product 3 </Link>
      <Link href={"product/4"}>Product 4 </Link>
    </>
  </>
  )
}

export default Product