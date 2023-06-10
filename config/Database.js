import { Sequelize } from "sequelize";

const db = new Sequelize("sibain_tik", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
