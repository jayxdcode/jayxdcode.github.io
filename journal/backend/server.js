const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const db = new sqlite3.Database("database.db");

app.use(express.json());

// Login endpoint
app.post("/login", (req, res) => {
    let { username, password } = req.body;

    db.get("SELECT * FROM Users WHERE username = ?", [username], (err, user) => {
        if (!user) {
            return res.json({ success: false, message: "Username doesn't exist" });
        }

        if (user.status_locked) {
            return res.json({ success: false, message: "Account locked after 3 failed attempts" });
        }

        if (user.password !== password) {
            db.run("UPDATE Users SET failed_attempts = failed_attempts + 1 WHERE username = ?", [username]);
            if (user.failed_attempts + 1 >= 3) {
                db.run("UPDATE Users SET status_locked = TRUE WHERE username = ?", [username]);
                return res.json({ success: false, message: "Too many failed attempts, account locked." });
            }
            return res.json({ success: false, message: "Incorrect password" });
        }

        // Reset failed attempts on success
        db.run("UPDATE Users SET failed_attempts = 0 WHERE username = ?", [username]);
        res.json({ success: true, userId: user.id });
    });
});

// Fetch latest 10 entries
app.get("/entries/:userId", (req, res) => {
    let userId = req.params.userId;
    db.all("SELECT * FROM Entries WHERE user_id = ? ORDER BY created_at DESC LIMIT 10", [userId], (err, rows) => {
        res.json(rows);
    });
});

// Add new entry
app.post("/addEntry", (req, res) => {
    let { userId, title, content } = req.body;
    db.run("INSERT INTO Entries (user_id, title, contents) VALUES (?, ?, ?)", [userId, title, content], (err) => {
        if (err) return res.json({ success: false });
        res.json({ success: true });
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
