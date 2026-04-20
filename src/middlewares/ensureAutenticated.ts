import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "../../configs/auth";

interface TokenPayLoad {
    role: string,
    sub: string
}

function ensureAutenticated(request: Request, response: Response, next: NextFunction){
    const authHaeder = request.headers.authorization

    if(!authHaeder){
        throw new AppError("JWT token não informado", 401)
    }

    const [,token] = authHaeder.split(" ")

    const {sub: user_id, role} = verify(token, authConfig.jwt.secret) as TokenPayLoad

    request.user = {
        id: String(user_id),
        role,
    }

    return next()
}

export {ensureAutenticated}