const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const {spawn} = require('child_process');
const fs = require('fs');
const models = require("../models");
const core1 = require('../models').Core1;
const core2 = require('../models').Core2;
const core3 = require('../models').Core3;
const core4 = require('../models').Core4;
const core5 = require('../models').Core5;
const task1 = require('../models').Task1;
const task2 = require('../models').Task2;
const task3 = require('../models').Task3;
const task4 = require('../models').Task4;
const task5 = require('../models').Task5;

const db_data = require('./db_data')

router.get('/', function(req, res, next) {
      res.render('resultPage.html');
});

router.get('/core1',  async function(req, res, next){
      res.status(201).json(await db_data.core1_value());
      next();
});

router.get('/core2',  async function(req, res, next){
      res.status(201).json(await db_data.core2_value());
      next();
});

router.get('/core3',  async function(req, res, next){
      res.status(201).json(await db_data.core3_value());
      next();
});

router.get('/core4',  async function(req, res, next){
      res.status(201).json(await db_data.core4_value());
      next();
});

router.get('/core5',  async function(req, res, next){
      res.status(201).json(await db_data.core5_value());
      next();
});

router.get('/task1',  async function(req, res, next){
      res.status(201).json(await db_data.task1_value());
      next();
});

router.get('/task2',  async function(req, res, next){
      res.status(201).json(await db_data.task2_value());
      next();
});

router.get('/task3',  async function(req, res, next){
      res.status(201).json(await db_data.task3_value());
      next();
});

router.get('/task4',  async function(req, res, next){
      res.status(201).json(await db_data.task4_value());
      next();
});

router.get('/task5',  async function(req, res, next){
      res.status(201).json(await db_data.task5_value());
      next();
});
   
module.exports = router;