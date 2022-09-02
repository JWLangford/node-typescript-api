import * as dotenv from "dotenv";
import Server from "./src/server";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = parseInt(process.env.PORT || "8080");

const server = Server.listen(PORT, () => {
  console.log(process.env.MESSAGE, server?.address());
});
