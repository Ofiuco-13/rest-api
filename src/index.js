const express = require("express");
const app = express();
const morgan = require("morgan");

//configuraciones
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use(require("./routes/index"))

//Comenzando el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor en puerto ${app.get("port")}`);
});
