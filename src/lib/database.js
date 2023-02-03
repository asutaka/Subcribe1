import sqlite3 from 'sqlite3';

export default function Conn() {
  const db = new sqlite3.Database("sqlite.db", (error) => {
      if (error) {
        return console.error(error.message);
      }
    });
    console.log("Connection with SQLite has been established");
    return db;
}