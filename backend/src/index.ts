import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import morgan from "morgan";

import PostType from "./types/PostType";

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
        description TEXT,
        upvotes INTEGER,
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
        post_id INTEGER,
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

app.get("/post/:id", (req: Request, res: Response) => {
  const postId = req.params.id;

  const query = `SELECT posts.*, comments.id AS comment_id, comments.content AS comment_content 
    FROM posts LEFT JOIN comments ON posts.id = comments.post_id WHERE posts.id=?`;

  db.all(query, [postId], (err, rows: PostType[]) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    if (rows.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    const post = {
      id: rows[0].id,
      title: rows[0].title,
      description: rows[0].description,
      comments: [] as Array<{ id: number; content: string }>,
    };

    rows.forEach((row) => {
      if (row.comment_id) {
        post.comments.push({
          id: row.comment_id,
          content: row.comment_content,
        });
      }
    });

    res.json(post);
  });
});

app.post("/post", (req: Request, res: Response) => {
  const { title, description, upvotes, downvotes } = req.body;

  if (!title || !description) {
    res.status(400).json({ error: "Title and description are required!" });
  }

  const stmt = db.prepare(
    "INSERT INTO posts (title, description, upvotes, downvotes) VALUES (?, ?, ?, ?)"
  );
  stmt.run(title, description, upvotes, downvotes, (err: any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        title,
        description,
      });
    }
  });
});

app.post("/comment", (req: Request, res: Response) => {
  const { postId, content } = req.body;

  if (!postId || !content) {
    res.status(400).json({ error: "Comment content is required!" });
  }

  const stmt = db.prepare(
    "INSERT INTO comments (content, post_id) VALUES (?, ?)"
  );
  stmt.run(content, postId, (err: any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        content,
        postId,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
