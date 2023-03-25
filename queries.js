const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "employee_mngmt",
  password: "postgrespass",
  port: 5432,
});
