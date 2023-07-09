import { Sequelize } from "sequelize";

const db = new Sequelize("countries", "postgres", "1234zzzz", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
  console.error("Error details:", error.original);
}

export default db;
