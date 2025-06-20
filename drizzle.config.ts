import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { Resource } from "sst";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    ssl: Resource.GoBrrrDatabase.host !== "localhost",
    host: Resource.GoBrrrDatabase.host,
    port: Resource.GoBrrrDatabase.port,
    user: Resource.GoBrrrDatabase.username,
    password: Resource.GoBrrrDatabase.password,
    database: Resource.GoBrrrDatabase.database,
  },
});
