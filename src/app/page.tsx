import Link from "next/link"

export default function Home(){
    return<>
        <h1>Welcome Home!!!</h1>
        <p>This is <span style={{color:"red"}}>Table</span></p>
            <Link href={"/about"} >Click Here for visit About Page</Link>
            <br />
            <Link href={"/product"}>Go to Product PAge</Link>
    </>
}