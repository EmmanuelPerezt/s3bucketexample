import {request, Router} from "express"
import { uploadImage } from "../controller/uploadImage";
import {upload} from '../config/config'

const imagesRouter = Router();


imagesRouter.post('/',upload.single('image'),uploadImage)
export default imagesRouter;