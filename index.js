var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/public/index.html");
})

app.get("/admin*", function(request, response) {
    response.sendFile(__dirname + "/public/admin.html");
})

app.get("/public/*", function(request, response) {
    response.sendFile(__dirname + request.path);
})

io.on("connection", function(client) {
    console.log("Connection.");
    client.on("disconnect", function() {
        console.log("A disconnection.");
    });
    client.on("new-data", function(data) {
        // add to database
        // inform all other clients
        client.broadcast.emit("new-data", data);
    });
    // here do a client.emit() for all the stored data
});

http.listen(3000, function() {
    console.log("Listening on *:3000");
});

