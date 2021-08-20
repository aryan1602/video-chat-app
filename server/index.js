const app = require("express")();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("HELLO");
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("cancelled");
  });

  socket.on("calluser", ({ userToCall, signal, from, callerName }) => {
    io.to(userToCall).emit("calluser", { signal, from, callerName });
  });

  socket.on("answercall", ({ caller, signal }) => {
    io.to(caller).emit("callaccepted", signal);
  });
});

server.listen(port, () => {
  console.log("Server Running");
});
