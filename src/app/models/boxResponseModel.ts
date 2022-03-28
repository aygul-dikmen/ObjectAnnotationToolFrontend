import { Box } from "./box";
import { ResponseModel } from "./responseModel";

export interface BoxResponseModel extends ResponseModel
{
    data : Box[]
}