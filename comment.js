// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true});

// Create schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const CommentSchema = new Schema({
    content: String,