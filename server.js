const express = require('express');
const BodyParser = require('body-parser')
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const authUser = require('./routes/authroutes/authroutes');
const db = require('./models');

app.use(express.static('client/build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

// including body parser because i'm an idiot
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.use('/user', authUser);
// app.use('')

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});