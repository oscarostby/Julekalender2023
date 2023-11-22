const app= require('express')()
     // static file serve
     app.use(express.static())
     // not found in static files, so default to index.html
     app.use((req, res) => res.sendFile(`$/index.html`))
app.listen(3000)

// 404 error handler
app.use((req, res, next) => {
  res.status(404).sendFile('$/404.html');
});