import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


connect();

export  async function POST(req:NextRequest){
    try {
        const reqBody = await req.json()
        const {email,password} = reqBody
        console.log(email, password)

        if(!email || !password) throw new Error("Please provide email and password")

        const user= await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User not exist"},{status:404})
        }

        const isMatch = await bcryptjs.compare(password,user.password)
        if(!isMatch){
            return NextResponse.json({error:"Invalid credentials"},{status:401})
        }

        const tokenData={
            id:user._id,
            email:user.email,
            username:user.username
        }

        const token= await jwt.sign(tokenData,"secret",{expiresIn:"1d"})

        const response=NextResponse.json({
            message:"Login success",
            success:true,
        })

        response.cookies.set("token",token,{
            httpOnly:true,
        })

        return response;

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}
