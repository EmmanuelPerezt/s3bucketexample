import multer from 'multer'


interface MulterRequest extends Request {
    file: any;
}
export const upload = multer({
    dest: 'uploads/'
})

