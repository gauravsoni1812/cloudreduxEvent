import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function GET(request:NextRequest){
    try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({_id:userId}).select("-password"); //-password matlab password deselect kardia hai us object mai hoga to

    return NextResponse.json({
        message:"user found",
        data:user
    }) 
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:400})
    }
}