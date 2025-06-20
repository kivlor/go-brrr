import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { Resource } from "sst";

const pool = new Pool({
  host: Resource.GoBrrrDatabase.host,
  port: Resource.GoBrrrDatabase.port,
  user: Resource.GoBrrrDatabase.username,
  password: Resource.GoBrrrDatabase.password,
  database: Resource.GoBrrrDatabase.database,
});
export const db = drizzle(pool);
