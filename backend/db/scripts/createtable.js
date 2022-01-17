import query from "../index.js";

const SQLquery = `CREATE TABLE IF NOT EXISTS Questions(
      id SERIAL PRIMARY KEY, 
      question TEXT, 
      answer TEXT, 
      category TEXT)`;

async function createTable() {
  const res = await query(SQLquery);
  console.log("Table Created");
}

createTable();
