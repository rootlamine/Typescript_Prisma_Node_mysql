import express from 'express';
import type {NextFunction, Request, Response } from 'express';
import { prismaClient } from '../index.ts';
import {compareSync, hashSync} from 'bcrypt'
import jwt, { NotBeforeError } from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets.ts';
import { BadRequestsExecption } from '../exceptions/bad-requests.ts';
import { ErrorCode } from '../exceptions/root.ts';
import { signupShema } from '../schema/users.ts';
import { UnproccessableEntity } from '../exceptions/validation.ts';
import { ZodError } from 'zod';
import { NotFoundException } from '../exceptions/not-found.ts';

export const signup = async(req:Request, res:Response, next:NextFunction) =>{
    
    signupShema.parse(req.body)
    const {email, password, name} = req.body

    let user = await prismaClient.user.findFirst({where:{email}})

    if (user) {
        new BadRequestsExecption('User already exists', ErrorCode.USER_ALREADY_EXITS)
    }
    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    })

    res.json(user)
}

export const login = async(req:Request, res:Response) =>{
    const {email, password} = req.body

    let user = await prismaClient.user.findFirst({where:{email}})
    if (!user) {
        throw new NotFoundException('User not Found.', ErrorCode.USER_NOT_FOUND)
    }

    if (!compareSync(password, user.password)) {
        throw new BadRequestsExecption('Incorrect password', ErrorCode.INCORRECT_PASSWORD)
    }

    const token = jwt.sign({
        userId: user.id
    }, JWT_SECRET)

    res.json({user, token})

}