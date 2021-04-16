const http = require("http");

http.createServer((request, response)=> {
    // console.log(`Url ${request.url}`);
    // console.log(`Method ${request.method}`);
    // console.log(`Headers ${request.headers}`);

    // response.statusCode = 200;
    // response.setHeader("Content-type", "text/html; charset=utf-8");
    // response.write("<h2>Welcome to site!</h2>");
    // response.end();

    if(request.url === "/home" || request.url === "/") {
        response.write("<h2>Home page</h2>");
        response.end()
    }
    else if(request.url === "/about"){
        response.write("<h2>About page</h2>")
    } else {
        response.write("<h2>Page not found</h2>")
    }
    response.end();
}).listen(3000);