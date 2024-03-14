"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import "./style.css"
import { useState } from "react";
const navLink = [
    {
        name: "Register", href: "/register"
    },
    {
        name: "Login", href: "/login"
    },
    {
        name: "Forgot Password", href: "/forgot-password"
    }
]
export default function AuthLayout({ children,
}: {
    children: React.ReactNode;
}) {

    const pathName=usePathname();
    const [input,setInput]=useState("");
    return <>

<>
<input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
</>
        {navLink.map((ele) => {
            const isActive=pathName.startsWith(ele.href);

            return (
                <Link href={ele.href} key={ele.name} className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}>{ele.name} </Link>
            )
        })}
        {children}
    </>
}