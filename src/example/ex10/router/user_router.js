const validationFn = require("../validations/joiValidation");
const users = require("../db/users");
//console.log(users);
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { query } = req;
  if (query.reverse) {
    return res.send(users.reverse());
  }
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id: userID } = req.params;
  const user = users.find((user) => user.id.toString() === userID);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send(userID + " -idli istifadeci tapilmadi");
  }
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const removedUser = users.find((user) => user.id === parseInt(req.params.id));
  if (!removedUser) {
    return res
      .status(404)
      .send(req.params.id + " idili istifadeci tapilmadi !!!");
  }
  const index = users.indexOf(removedUser);
  users.splice(index, 1);
  res.send(removedUser);
});

module.exports = router;
