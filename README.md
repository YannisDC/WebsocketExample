# WebsocketExample
An example of using a web socket.

## Usage
This example makes use of two local servers. A node server for simulating the backend and python for running the frontend.
To fire up both servers open two teminal windows.

In the first:

    cd server
    node websocket-server.js
    
In the second

    python -m SimpleHTTPServer 8000