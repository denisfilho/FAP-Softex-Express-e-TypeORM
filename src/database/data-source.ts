import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

//Espera o AppDataSource Inicializar
export async function starDatabase() {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error(error, "Error initializing database");
    throw error;
  }
}
