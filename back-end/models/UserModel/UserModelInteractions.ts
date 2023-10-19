import { filePath } from "MulterLogic/Contact";
import User from "./UserModel";



export const createAUser = async function(userName:string,email:string,phoneNumber:string,fileCertificate:string):Promise<User>{
    try{  
        const user =  await User.create({
            userName: userName,
            email:email,
            phoneNumber:phoneNumber,
            fileCertificate: fileCertificate
        })
        return user
    }
    catch(err){
       throw err
    }
}

export const findAllUsers  = async function():Promise<User[]>{
    try{
      const users = await User.findAll()
      return users
    }
    catch(err){
      throw err
    }
}

export const findAUser = async function(id:number):Promise<User>{
    try{
      const user = await User.findByPk(id)
      return user
    }
    catch(err){
       throw err
    }
}

export const deleteAuser = async function(id:number):Promise<number>{
   try { 
    const user = await User.destroy({where:{id:id}})
    return user
    }
    catch(err){
        throw err
    }
}

export const updateUser = async function(id: number,body:any):Promise<[affectedCount: number]>{
    try{
    const updated = await User.update(body,{
        where:{
            id :id
        }
    })
    return updated
    }
    catch(err){
        throw err
    }
}

