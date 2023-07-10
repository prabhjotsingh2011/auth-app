import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"



connect()

export async function POST(req:NextRequest) {
    try {
        const reqBody=await req.json()
        const{username,email,password}=reqBody
        console.log(username,email,password)
        
        const user= await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"}, {status: 400})
        }
        // console.log("sdfsfsfsffsfsfsfsf")

        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)

        
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save()
        return NextResponse.json(savedUser, {status: 201})

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}