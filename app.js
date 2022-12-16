const express = require ("express");
const path = require("path");
const app = express ();

const port = process.env.PORT ||3000;

app.listen (port, ( )=> console.log ("Servidor escuchando puerto")); // para levanar    

app.use (express.static("Public")); 
app.get ("/", (req,res) =>  res.sendFile(path.join(__dirname , "/views/home.html")));
app.get ("/register", (req,res) =>  res.sendFile(path.join(__dirname , "/views/register.html"))); // unifica el app.js con mi html que se encuentra en la carpeta VIEWS
app.get ("/login", (req,res) =>  res.sendFile(path.join(__dirname , "/views/login.html")));
// Hay que agregar uun.gitignore en la raiz de mi proyecto y dentro escribir node_modules.