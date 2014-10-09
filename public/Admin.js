var Admin = {
    socket: null,
    submitButton: null
};

Admin.init = function() {
    // start event handling
    Admin.socket = io();
};

Admin.sendContent = function() {
    var data = {
        header: "",
        image: "public/Admin.gif",
        content: document.getElementById("add-content").value
    };
    Admin.socket.emit("new-data", data);
    return false;
};

// The false means fire the event at bubbling stage, not capturing.
window.addEventListener("load", Admin.init, false);
