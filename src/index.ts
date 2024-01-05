import dotenv from "dotenv";
dotenv.config(); //precisa vim antes de importar qualquer coisa

import "reflect-metadata";
import { starDatabase } from "./database/data-source";
import app from "./app";

async function main() {
  try {
    await starDatabase();
    console.log(`Database initialized`);
    app.listen(3003, () => {
      console.log("Aplicação usando requisições http na porta 3003");
    });
  } catch (error) {
    console.log(error, "Error initializing app");
  }
}

main();
