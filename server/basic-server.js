const express = require('express');
const path = require('path');

const app = express();
app.use(express.json()); // parse party

app.use(express.static(path.join(__dirname, '../client/dist'))); // static server


app.listen(3000);
console.log('Server listening on port 3000');

// require('dotenv').config();
// const express = require('express');
// const path = require('path');

// const app = express();
// app.use(express.json()); // parse party

// app.use(express.static(path.join(__dirname, '../client/dist'))); // static server

// --- Routes ---

// app.get('/getPosts', postCtrl.getPosts);
// app.post('/addPost', postCtrl.addPost);
// app.get('/getPostsById/:id', postCtrl.getPostById);
// app.delete('/deletePost', postCtrl.deletePost);


// --- port ---
// const PORT = process.env.PORT || 3000;

// app.listen(PORT);
// console.log(`Server listening at http://localhost:${PORT}`);




// ----------------------------- FROM DEPOY OF FULL STACK REVIEW  ----------------------------------
// const express = require('express');
// const path = require('path');
// const {getReposByUsername} = require('../helpers/github');
// const {save} = require('../database');
// const {getData} = require('../database');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const {Repo} = require('../database');
// const apiToken = require('../getSecrets.js').GITHUB_API_KEY;

// let app = express();

// const PORT = process.env.PORT || 1128;

// app.use(express.static('client/dist'));
// app.use(bodyParser.json());

// app.post('/repos', function (req, res) {
//   const {username} = req.body;

//   getReposByUsername(username)
//     .then(repoData => save(repoData))
//     .then(() => res.sendStatus(200))
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

// app.get('/repos', function (req, res) {

//   Repo.find()
//     .sort({forks: -1})
//     .limit(25)
//     .exec((err, repos) => {
//       if (err) {
//         console.log(err);
//         res.sendStatus(500);
//       } else {
//         res.json(repos);
//       }
//     });
// });

// app.listen(PORT, function() {
//   console.log(`listening on port ${PORT}`);
// });

// ----------------------------- FROM TECHNICAL ASSESSMENT  ----------------------------------
// require("dotenv").config();

// const express = require("express");
// const path = require("path");
// const postCtrl = require("./controllers/posts.js");
// const logger = require("./middleware/logger.js");
// const authChecker = require("./middleware/authChecker.js");

// const app = express();
// // TODO: Add app-wide middleware when instructed per README
// app.use(express.json());

// // TODO: Set up static service of assets when instructed per README
// app.use(express.static(path.join(__dirname, '../client/dist')));

// // TODO: Define routes when instructed per README
// app.get('/getPosts', postCtrl.getPosts);
// app.post('/addPost', postCtrl.addPost);
// app.get('/getPostsById/:id', postCtrl.getPostById);
// app.delete('/deletePost', postCtrl.deletePost); // add authChecker to route

// const PORT = process.env.PORT || 3000;

// app.listen(PORT);
// console.log(`Server listening at http://localhost:${PORT}`);

// -------------------------------- ctrl post -------------------------------------------------
// const Post = require("../models/Post.js");

// exports.getPosts = (req, res) => {
//   Post.findAll()
//     .then((response) => {
//       res.send(response);
//     })
//     .catch((err) => {
//       console.log('ERROR IN SERVER CONTROLLERS POSTS, FINDALL', err);
//       res.sendStatus(501);
//     });
// };

// exports.getPostById = (req, res) => {
//   let id = req.params.id;

//   Post.findByID(id)
//     .then((response) => {
//       res.send(response);
//     })
//     .catch((err) => {
//       console.log('ERROR SERVER/CONTROLLERS/POSTS, GETPOSTBYID', err);
//       res.sendStatus(501);
//     });
// };

// exports.addPost = (req, res) => {
//   let {title, content, summary, status, image_id} = req.body.answers;

//   Post.createOne({title, content, summary, status, image_id})
//     .then (() => {
//       res.sendStatus(201);
//     })
//     .catch((err) => {
//       console.log('ERROR SERVER/CONTROLLERS/POSTS, ADDPOST', err);
//       res.sendStatus(501);
//     });
// };

// exports.deletePost = (req, res) => {
//   let id = req.body.id;
//   Post.deleteByID(id)
//     .then((result) => {
//       res.sendStatus(204);
//     })
//     .catch((err) => {
//       console.log('ERROR IN SERVER/CONTROLLER/POSTS, DELETEPOST', err);
//       res.sendStatus(501);
//     });
// };
