import express from 'express';
import type { Express, Request, Response } from 'express';
import { PORT } from './secrets.ts';
import rootRouter from './routes/index.ts';
import { PrismaClient } from '@prisma/client';
import { errorMiddleware } from './middlewares/errors.ts';

const app:Express = express()

app.use(express.json())

app.use('/api', rootRouter)

export const prismaClient = new PrismaClient({
    log:['query']
})

app.use(errorMiddleware)

app.listen(PORT, () =>{
    console.log('App Working..')
})