import multer from 'multer'
import { S3, config } from 'aws-sdk';
import dotenv from 'dotenv'

dotenv.config();

export const s3 = new S3({
    region: process.env.aws_bucket_region,
    accessKeyId: process.env.aws_access_key,
    secretAccessKey: process.env.aws_secret_key
})



//configuracion para agregar el tipo file a la request
interface MulterRequest extends Request {
    file: any;
}
//configuracion para multer
export const upload = multer({
    dest: 'uploads/'
})

