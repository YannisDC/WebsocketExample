"use strict";
var url = "ws://localhost:8080";
var ws = new WebSocket(url);

ws.onopen = function() {
  log("open web socket");
  ws.send("thank you for accepting this Web Socket request");
}

ws.onmessage = function(e) {
  log(e.data.toString());
}

ws.onclose = function(e) {
  log("closed");
}

ws.onerror = function(e) {
  log("error");
}

$( document ).ready(function() {
    $("#sendButton").click(function() {
      ws.send($("#inputMessage").val());
    })
});

function log(s) {
  var el = $("#logOutput").after('<p>' + s +'</p>');
}