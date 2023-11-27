import { Pool } from "pg";

const connectionString = "postgres://crrocnkw:vEmFEcwL3pG3xRjb7YMczBt1Zfbld63_@flora.db.elephantsql.com/crrocnkw";

const db = new Pool({connectionString});

export default db;