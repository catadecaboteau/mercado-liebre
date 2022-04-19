const express = require ('express');

const app = express();

const path = require('path')

const port = 3000

app.listen(port, () => console.log('Servidor corriendo en el puerto '+port))

//aca arrancan las rutas
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./home.html"))
})

app.get("*", (req, res) => {
    res.status(404).send('Not found 404')
})