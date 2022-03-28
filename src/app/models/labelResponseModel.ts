import { Label } from "./label";
import { ResponseModel } from "./responseModel";

export interface LabelResponseModel extends ResponseModel
{
    data : Label[]
}