const http = require("http");
const app = require("./app");

// Create server
const server = http.createServer(app);
const port = app.get("port");
server.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
