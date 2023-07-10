import { NextRequest } from "next/server";

import jwt from "jsonwebtoken"

export default function getDataFromToken(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value || ""
        const data = jwt.verify(token, "secret")
        return data
    } catch (error: any) {

    }

}