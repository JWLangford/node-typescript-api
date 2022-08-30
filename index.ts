import Server from "./src/server";

const PORT = parseInt(process.env.PORT || "8080");

const server = Server.listen(PORT, () => {
  console.log("listening on port %s...", server?.address());
});
