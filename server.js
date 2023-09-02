const http = require("http")

http
  .createServer((req, res) => {
    console.log(req.headers)
    res.write("Hello World")
    res.end()
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000")
  })
