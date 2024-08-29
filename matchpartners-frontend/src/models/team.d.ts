import { strict } from "assert";
import { userType } from "./user";
/**
 * 队伍类别
 */
export type TeamType = {
    id:number;
    username:string;
    name:string;
    description:string;
    expireTime?:Date;
    maxNum:number;
    password?:string;
    status:number;
    createTime:Date;
    updateTime:Date;
    createUser?:userType;
    hasJoinNum?:number;
}