import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./database";

export const handler = async () => {
  await migrate(db, {
    migrationsFolder: "./migrations",
  });
};
