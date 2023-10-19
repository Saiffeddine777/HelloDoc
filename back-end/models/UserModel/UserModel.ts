import {DataTypes,Sequelize,Model} from "sequelize"
import sequelize from "../../database/index"

class User extends Model{
   public id! :string ;
   public userName! :string;
   public email! : string;
   public phoneNumber !:string;
   public fileCertificate!:string; 

   public readonly createdAt ! : Date;
   public readonly updatedAt ! :Date;
}

User.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fileCertificate:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
},
 {
   sequelize,
   modelName:"User",
   tableName:"Users" }
)

export default User;