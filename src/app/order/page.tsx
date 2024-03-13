"use client"
import { useRouter } from "next/navigation";
export default function Order() {
    const routers = useRouter();
    const handleClik = () => {
        console.log("Confirm your order");
        routers.push("/");
    }
    return(

    <>
        <h1>This is Order section</h1>
        <button onClick={handleClik}>place order</button>
    </>
    )
}
