import pkg from "pg";
const { Pool } = pkg;
const {DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD} = process.env;
import 'dotenv/config';

const pool = new Pool({
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    allowExitOnIdle: true,
  })

    //   const getData= async ()=>{
//     const response = await pool.query('select now()');
//     console.log(response.rows)
//   }
// getData();

export default pool;