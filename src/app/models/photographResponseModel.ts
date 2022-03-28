import { Photograph } from "./photograph";
import { ResponseModel } from "./responseModel";

export interface PhotographResponseModel extends ResponseModel
{
    data : Photograph[]
}