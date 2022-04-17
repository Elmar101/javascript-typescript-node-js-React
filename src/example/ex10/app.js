const usersRouter = require("./router/user_router");
const homeRouter = require("./router/home_router");
const notFoundRouter = require("./router/notFound_router");
const express = require("express");
var morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/users", usersRouter);
app.use("/", homeRouter);
app.use(notFoundRouter);

app.listen(4500, () => {
  console.log("SERVER LISTEN !!!");
  console.log("**********************************************************");
});




