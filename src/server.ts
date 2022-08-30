import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Get Request From Server");
});

export default app;
