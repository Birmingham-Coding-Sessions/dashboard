var Notifications = {
    socket: null,
    ul: null
};

Notifications.init = function() {
    Notifications.ul = document.getElementById("messages");
    Notifications.socket = io();
    Notifications.socket.on("new-data", function(data) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", data.image);
        li.appendChild(img);
        li.appendChild(document.createTextNode(data.content));
        Notifications.ul.appendChild(li);
    });
};

// The false means fire the event at bubbling stage, not capturing.
window.addEventListener("load", Notifications.init, false);
