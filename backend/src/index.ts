import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import morgan from "morgan";

const PORT = 3000;

const app = express();
const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
    db.run(
      `
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT
        upvotes INTEGER
        downvotes INTEGER
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating table:", err.message);
        } else {
          console.log("Table created (or already exists)");
        }
      }
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        post_id INTEGER
        content TEXT NOT NULL,
        FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
      )`,
      (err) => {
        if (err) {
          console.error("Error creating table:", err.message);
        } else {
          console.log("Table created (or already exists)");
        }
      }
    );
  }
});

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.get("/posts", (req: Request, res: Response) => {
  db.all("SELECT * FROM posts", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
