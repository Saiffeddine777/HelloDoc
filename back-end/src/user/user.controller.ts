import { Controller,Post,Body,UploadedFile,UseInterceptors, Get, Param, Delete, Put } from '@nestjs/common'
import { UserService } from './user.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'MulterLogic/Contact';


@Controller('user')
export class UserController {
    constructor (private readonly userService:UserService){

    }
 @Post("create")
 @UseInterceptors(FileInterceptor("fileCertificate",multerConfig))
 async userCreation(@UploadedFile() file:Express.Multer.File, @Body() body:any){
   const {userName ,email , phoneNumber} = body
   const user = await this.userService.makeAUser(userName, email,phoneNumber)
   return user;
 }
 
 @Get("all")
 async getAllAppUsers(){
   return this.userService.getAllUsers()
 }

  @Get("one/:id")
    async getOneAppUser (@Param("id") id:string){
      return this.userService.getAUser(Number(id))
    }
  
  @Delete("delete/:id")
  async deleteAppUser(@Param("id") id:string){
    return this.userService.deleteuser(Number(id))
  }

  @Put("updateOne/:id")
  @UseInterceptors(FileInterceptor("fileCertificate",multerConfig))
  async updateAppUser(@Param("id") id:string,  @UploadedFile() file:Express.Multer.File , @Body() body :any){
    return this.userService.updateThisUser(Number(id),body)
  }

  
}
