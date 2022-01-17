import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
});

const query = (text, params) => pool.query(text, params);

export default query;
