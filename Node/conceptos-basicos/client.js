const net = require("net");
const readline = require("readline");

// Define the port and host to connect to
const PORT = 3000;
const HOST = "10.10.1.4";

// Create a client instance
const client = new net.Socket();

// Create an interface for reading data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Connect to the server
client.connect(PORT, HOST, () => {
  console.log(`Connected to server at ${HOST}:${PORT}`);
  rl.setPrompt("Tamara: ");
  rl.prompt();

  // Handle user input
  rl.on("line", (line) => {
    client.write(line);
    rl.prompt();
  });
});

// Set encoding for the data
client.setEncoding("utf8");

// Pipe server responses to process.stdout (or any other writable stream)
client.on("data", (data) => {
  console.log(`Server: ${data}`);
});

// Handle client disconnection
client.on("close", () => {
  console.log("Connection closed");
  rl.close();
});

// Handle errors
client.on("error", (err) => {
  console.error(`Client error: ${err}`);
  rl.close();
});
