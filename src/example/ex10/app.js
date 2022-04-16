const Joi = require("joi");
const express = require("express");
var morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const users = [
  {
    id: 1,
    name: "Elmar",
    sname: "Amanov",
    age: 26,
  },
  {
    id: 2,
    name: "Eldar",
    sname: "Amanov",
    age: 26,
  },
  {
    id: 3,
    name: "Elcin",
    sname: "Quliyev",
    age: 26,
  },
];
app.listen(4500, () => {
  console.log("SERVER LISTEN !!!");
  console.log("**********************************************************");
});

app.get("/", (req, res) => {
  res.send("<h1> Home Page </h1>");
});

app.get("/users", (req, res) => {
  //console.log( "REQ URL: ",req.url , "\n REQ PARAMS: ", req.params , "\n REQ QUERY PARAMS: ", req.query ," \n REQ BODY: ", req.body);
  const { query } = req;
  if (query.reverse) {
    res.send(users.reverse());
  } else res.send(users);
});

app.get("/users/:id", (req, res) => {
  const { id: userID } = req.params;
  const user = users.find((user) => user.id.toString() === userID);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send(userID + " -idli istifadeci tapilmadi");
  }
});

app.post("/users", (req, res) => {
  const { body } = req;

  const { error } = validationFn(body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const createUser = {
    id: users.length + 1,
    ...body,
  };
  users.push(createUser);
  res.send(createUser);
});

app.put("/users/:id", (req, res) => {
  const { params, body } = req;
  const { id: userID } = params;
  const { error } = validationFn(body);

  let user = users.find((user) => user.id === parseInt(userID));
  if (!user) {
    return res.status(404).send(userID + " idli istifadeci tapilmadi .");
  }

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  user.name = body.name;
  user.sname = body.sname;
  user.age = body.age;

  res.send(user);
});

app.delete("/users/:id",(req,res)=>{
    const removedUser = users.find(user=> user.id === parseInt(req.params.id));
    if(!removedUser){
        return res.status(404).send(req.params.id + " idili istifadeci tapilmadi !!!")
    }
    const index = users.indexOf(removedUser);
    users.splice(index,1);
    res.send(removedUser);
});
function validationFn(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    sname: Joi.string().min(3).max(18).required(),
    age: Joi.number().integer().required(),
  });

  return schema.validate(data);
}
