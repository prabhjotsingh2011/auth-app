"use client";
import { log } from "console";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router=useRouter()
    
    const logout=async()=>{
        try {
            const response= await fetch("/api/users/logout",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(response.ok){
                router.push("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="">
              profile page
              <br />
              <button
                onClick={logout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Logout</button>
        </div>
        
    )
}