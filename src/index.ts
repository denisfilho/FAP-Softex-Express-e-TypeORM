import dotenv from "dotenv";
dotenv.config(); //precisa vim antes de importar qualquer coisa

import "reflect-metadata";
import { starDatabase } from "./database/data-source";

async function main() {
  try {
    await starDatabase();
    console.log(`Database initialized`);
  } catch (error) {
    console.log(error, "Error initializing app");
  }
}

main();
