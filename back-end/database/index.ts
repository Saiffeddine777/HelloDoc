import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';


dotenv.config();

const { DATABASE, PASSWORD, USERNAME, HOST } = process.env;

console.log(DATABASE, PASSWORD, USERNAME, HOST);
if (!HOST || !PASSWORD || !USERNAME || !DATABASE) {
  throw new Error('Please enter the necessary credentials for the database connection');
}


const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5432;

const sequelize = new Sequelize({
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  host: HOST,
  port: port,
  dialect: 'postgres'
});

sequelize.sync()

export default sequelize;
