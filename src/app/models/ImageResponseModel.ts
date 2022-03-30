import { Image } from "./image";
import { ResponseModel } from "./responseModel";

export interface ImageResponseModel extends ResponseModel
{
    data : Image[]
}