const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

// Create Users table
db.run(`
  CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    failed_attempts INTEGER DEFAULT 0,
    status_locked BOOLEAN DEFAULT FALSE
  )
`);

// Create Entries table
db.run(`
  CREATE TABLE IF NOT EXISTS Entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    contents TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id)
  )
`);
