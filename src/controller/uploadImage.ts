import { Request, Response } from 'express'
import { S3,config } from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config()


export const uploadImage:any = (req:Request,res:Response) => {
    if(!req.file){
        res.status(400).send('envie un archivo')
    }
    console.log(req.file)
    res.status(200).send({'archivo enviad': req.file})
}