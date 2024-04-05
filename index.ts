import express from "express";
import { health, home } from "./service";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", home);

app.get("/health", health);

app.listen(PORT, () => {
  console.log(`connect to localhost:${PORT}`);
});
