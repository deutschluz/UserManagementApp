const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "database",
  password: "postgrespass",
  port: 5432,
});
