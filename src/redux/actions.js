
import { COUNT_ADD,COUNT_DECREASE } from "./action-type";

export const add=(value)=>({type:COUNT_ADD,data:value})
export const decrease=(value)=>({type:COUNT_DECREASE,data:value})
