import Card from "@/components/cart";
import Link from "next/link";
export default function Notifications(){
    return <>
        <Card>
            <div> Notification</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
            </Card>    
</>
}