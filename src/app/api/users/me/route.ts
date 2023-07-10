import getDataFromToken from '@/helpers/getDataFromToken';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import User from '@/models/userModel';
import { connect } from '@/dbConfig/dbConfig';

connect    ();

export async function GET(req: NextRequest) {
    try {
        const userdata:any=await getDataFromToken(req);
        const user=await User.findById(userdata._id).select("-password")

        return NextResponse.json({message:"User Found",user}, {status: 200})



    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}