import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./database";

export const handler = async () => {
  console.log("Migrating database...");
  await migrate(db, {
    migrationsFolder: "./migrations",
  });
  console.log("Done.");
};
