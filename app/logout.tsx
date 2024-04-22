'use client';
import { signOut } from "next-auth/react"

export default function Logout() {
    return(
        <span className="text-white relative top-0" onClick={()=>{
            signOut();
        }}>
            Logout
        </span>
    )
}