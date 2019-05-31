import { UserController } from './../Controllers/userController';
import {Request, Response} from "express"

export class Routes {

    public userController:UserController = new UserController();

    public routes(app:any):void {        
        app.route('/')
            .get((req: Request, res: Response) => {            
                res.status(200).send('Hello Good World!');
        });
        
        app.route('/user').post(this.userController.addnewUser)
    }
}