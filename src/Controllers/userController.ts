import { UserSchema } from './../Models/userModel';
import * as mongoose from 'mongoose';
import { Request, Response} from 'express';

const User = mongoose.model('User', UserSchema);


export class UserController {

    public addnewUser (req:Request , res:Response){
        let newUser = new User(req.body);

        newUser.save((error, user)=>{
            if(error){
               return res.status(500).json({
                    status:false,
                    message:error.message
                })
            }else {
                return res.status(201).json({
                    status:true,
                    message:'User Created successfully',
                    user:user
                })
            }
        })

    }

}