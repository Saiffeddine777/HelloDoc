import {  Injectable} from '@nestjs/common';
import {createAUser, findAllUsers, findAUser,deleteAuser,updateUser} from "../../models/UserModel/UserModelInteractions"

import * as fs from "fs/promises"
import { filePath } from 'MulterLogic/Contact';



@Injectable()
export class UserService {
    async makeAUser(userName:string, email:string,phoneNumber:string){
    try{
        const data:Buffer = await fs.readFile(filePath)
        const fileCertificate = data.toString("base64")
        return createAUser(userName,email,phoneNumber,fileCertificate)
      }
      catch(err){
        throw err
      }
    }

    async getAllUsers(){
        return findAllUsers()
    }

    async getAUser(id:number){
        return findAUser(id)
    }
    async deleteuser(id:number){
        return deleteAuser(id)
    }
    
    async updateThisUser(id:number,body:any){
          try{
            const data = await fs.readFile(filePath)
            body.fileCertificate = data.toString("base64")
            return updateUser(id,body)
          }
          catch(err){
            throw err
          }
           
    }

}


