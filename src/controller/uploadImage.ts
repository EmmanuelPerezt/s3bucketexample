import { Request, Response } from 'express'
import dotenv from 'dotenv'
import {s3} from '../config/config'
dotenv.config()


export const uploadImage:any = (req:Request,res:Response) => {
    if(!req.file){
        res.status(400).send('envie un archivo')
    }
    //afinar detalles de los params.
    const params = {
        Bucket: process.env.aws_bucket_name ||'',
        Body: req.file?.originalname || '',
        Key: req.file?.filename || ''
    }
    s3.upload(params, (err:any, data:any) => {
        if(err){
            res.status(400).send({message: err})
        }
        res.status(200).send({'enviado con exito': {data}})
    })
}