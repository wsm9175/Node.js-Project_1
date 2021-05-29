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


async function core1_value(){
      console.log('core1 선택됨');
      max_value_task1 = await core1.max('task1').then(max => {
            return max;
      });
      min_value_task1 = await core1.min('task1').then(min => {
            return min;
      });
      avg_value_task1 = await core1.sum('task1').then(sum => {
            return sum / 10;
      });

      max_value_task2 = await core1.max('task2').then(max => {
            return max;
      });
      min_value_task2 = await core1.min('task2').then(min => {
            return min;
      });
      avg_value_task2 = await core1.sum('task2').then(sum => {
            return sum / 10;
      });

      max_value_task3 = await core1.max('task3').then(max => {
            return max;
      });
      min_value_task3 = await core1.min('task3').then(min => {
            return min;
      });
      avg_value_task3 = await core1.sum('task3').then(sum => {
            return sum / 10;
      });

      max_value_task4 = await core1.max('task4').then(max => {
            return max;
      });
      min_value_task4 = await core1.min('task4').then(min => {
            return min;
      });
      avg_value_task4 = await core1.sum('task4').then(sum => {
            return sum / 10;
      });

      max_value_task5 = await core1.max('task5').then(max => {
            return max;
      });
      min_value_task5 = await core1.min('task5').then(min => {
            return min;
      });
      avg_value_task5 = await core1.sum('task5').then(sum => {
            return sum / 10;
      });
      
      core1_value = {
            "max_task1" : max_value_task1,
            "min_task1" : min_value_task1,
            "avg_task1" : avg_value_task1,
            "max_task2" : max_value_task2,
            "min_task2" : min_value_task2,
            "avg_task2" : avg_value_task2,
            "max_task3" : max_value_task3,
            "min_task3" : min_value_task3,
            "avg_task3" : avg_value_task3,
            "max_task4" : max_value_task4,
            "min_task4" : min_value_task4,
            "avg_task4" : avg_value_task4,
            "max_task5" : max_value_task5,
            "min_task5" : min_value_task5,
            "avg_task5" : avg_value_task5,
      };
      
      return core1_value;
}

async function core2_value(){
      console.log('core2 선택됨');
      max_value_task1 = await core2.max('task1').then(max => {
            return max;
      });
      min_value_task1 = await core2.min('task1').then(min => {
            return min;
      });
      avg_value_task1 = await core2.sum('task1').then(sum => {
            return sum / 10;
      });

      max_value_task2 = await core2.max('task2').then(max => {
            return max;
      });
      min_value_task2 = await core2.min('task2').then(min => {
            return min;
      });
      avg_value_task2 = await core2.sum('task2').then(sum => {
            return sum / 10;
      });

      max_value_task3 = await core2.max('task3').then(max => {
            return max;
      });
      min_value_task3 = await core2.min('task3').then(min => {
            return min;
      });
      avg_value_task3 = await core2.sum('task3').then(sum => {
            return sum / 10;
      });

      max_value_task4 = await core2.max('task4').then(max => {
            return max;
      });
      min_value_task4 = await core2.min('task4').then(min => {
            return min;
      });
      avg_value_task4 = await core2.sum('task4').then(sum => {
            return sum / 10;
      });

      max_value_task5 = await core2.max('task5').then(max => {
            return max;
      });
      min_value_task5 = await core2.min('task5').then(min => {
            return min;
      });
      avg_value_task5 = await core2.sum('task5').then(sum => {
            return sum / 10;
      });
      
      core2_value = {
            "max_task1" : max_value_task1,
            "min_task1" : min_value_task1,
            "avg_task1" : avg_value_task1,
            "max_task2" : max_value_task2,
            "min_task2" : min_value_task2,
            "avg_task2" : avg_value_task2,
            "max_task3" : max_value_task3,
            "min_task3" : min_value_task3,
            "avg_task3" : avg_value_task3,
            "max_task4" : max_value_task4,
            "min_task4" : min_value_task4,
            "avg_task4" : avg_value_task4,
            "max_task5" : max_value_task5,
            "min_task5" : min_value_task5,
            "avg_task5" : avg_value_task5,
      };
      
      return core2_value;
}

async function core3_value(){
      console.log('core3 선택됨');
      max_value_task1 = await core3.max('task1').then(max => {
            return max;
      });
      min_value_task1 = await core3.min('task1').then(min => {
            return min;
      });
      avg_value_task1 = await core3.sum('task1').then(sum => {
            return sum / 10;
      });

      max_value_task2 = await core3.max('task2').then(max => {
            return max;
      });
      min_value_task2 = await core3.min('task2').then(min => {
            return min;
      });
      avg_value_task2 = await core3.sum('task2').then(sum => {
            return sum / 10;
      });

      max_value_task3 = await core3.max('task3').then(max => {
            return max;
      });
      min_value_task3 = await core3.min('task3').then(min => {
            return min;
      });
      avg_value_task3 = await core3.sum('task3').then(sum => {
            return sum / 10;
      });

      max_value_task4 = await core3.max('task4').then(max => {
            return max;
      });
      min_value_task4 = await core3.min('task4').then(min => {
            return min;
      });
      avg_value_task4 = await core3.sum('task4').then(sum => {
            return sum / 10;
      });

      max_value_task5 = await core3.max('task5').then(max => {
            return max;
      });
      min_value_task5 = await core3.min('task5').then(min => {
            return min;
      });
      avg_value_task5 = await core3.sum('task5').then(sum => {
            return sum / 10;
      });
      
      core3_value = {
            "max_task1" : max_value_task1,
            "min_task1" : min_value_task1,
            "avg_task1" : avg_value_task1,
            "max_task2" : max_value_task2,
            "min_task2" : min_value_task2,
            "avg_task2" : avg_value_task2,
            "max_task3" : max_value_task3,
            "min_task3" : min_value_task3,
            "avg_task3" : avg_value_task3,
            "max_task4" : max_value_task4,
            "min_task4" : min_value_task4,
            "avg_task4" : avg_value_task4,
            "max_task5" : max_value_task5,
            "min_task5" : min_value_task5,
            "avg_task5" : avg_value_task5,
      };
      
      return core3_value;
}

async function core4_value(){
      console.log('core4 선택됨');
      max_value_task1 = await core4.max('task1').then(max => {
            return max;
      });
      min_value_task1 = await core4.min('task1').then(min => {
            return min;
      });
      avg_value_task1 = await core4.sum('task1').then(sum => {
            return sum / 10;
      });

      max_value_task2 = await core4.max('task2').then(max => {
            return max;
      });
      min_value_task2 = await core4.min('task2').then(min => {
            return min;
      });
      avg_value_task2 = await core4.sum('task2').then(sum => {
            return sum / 10;
      });

      max_value_task3 = await core4.max('task3').then(max => {
            return max;
      });
      min_value_task3 = await core4.min('task3').then(min => {
            return min;
      });
      avg_value_task3 = await core4.sum('task3').then(sum => {
            return sum / 10;
      });

      max_value_task4 = await core4.max('task4').then(max => {
            return max;
      });
      min_value_task4 = await core4.min('task4').then(min => {
            return min;
      });
      avg_value_task4 = await core4.sum('task4').then(sum => {
            return sum / 10;
      });

      max_value_task5 = await core4.max('task5').then(max => {
            return max;
      });
      min_value_task5 = await core4.min('task5').then(min => {
            return min;
      });
      avg_value_task5 = await core4.sum('task5').then(sum => {
            return sum / 10;
      });
      
      core4_value = {
            "max_task1" : max_value_task1,
            "min_task1" : min_value_task1,
            "avg_task1" : avg_value_task1,
            "max_task2" : max_value_task2,
            "min_task2" : min_value_task2,
            "avg_task2" : avg_value_task2,
            "max_task3" : max_value_task3,
            "min_task3" : min_value_task3,
            "avg_task3" : avg_value_task3,
            "max_task4" : max_value_task4,
            "min_task4" : min_value_task4,
            "avg_task4" : avg_value_task4,
            "max_task5" : max_value_task5,
            "min_task5" : min_value_task5,
            "avg_task5" : avg_value_task5,
      };
      
      return core4_value;
}

async function core5_value(){
      console.log('core5 선택됨');
      max_value_task1 = await core5.max('task1').then(max => {
            return max;
      });
      min_value_task1 = await core5.min('task1').then(min => {
            return min;
      });
      avg_value_task1 = await core5.sum('task1').then(sum => {
            return sum / 10;
      });

      max_value_task2 = await core5.max('task2').then(max => {
            return max;
      });
      min_value_task2 = await core5.min('task2').then(min => {
            return min;
      });
      avg_value_task2 = await core5.sum('task2').then(sum => {
            return sum / 10;
      });

      max_value_task3 = await core5.max('task3').then(max => {
            return max;
      });
      min_value_task3 = await core5.min('task3').then(min => {
            return min;
      });
      avg_value_task3 = await core5.sum('task3').then(sum => {
            return sum / 10;
      });

      max_value_task4 = await core5.max('task4').then(max => {
            return max;
      });
      min_value_task4 = await core5.min('task4').then(min => {
            return min;
      });
      avg_value_task4 = await core5.sum('task4').then(sum => {
            return sum / 10;
      });

      max_value_task5 = await core5.max('task5').then(max => {
            return max;
      });
      min_value_task5 = await core5.min('task5').then(min => {
            return min;
      });
      avg_value_task5 = await core5.sum('task5').then(sum => {
            return sum / 10;
      });
      
      core5_value = {
            "max_task1" : max_value_task1,
            "min_task1" : min_value_task1,
            "avg_task1" : avg_value_task1,
            "max_task2" : max_value_task2,
            "min_task2" : min_value_task2,
            "avg_task2" : avg_value_task2,
            "max_task3" : max_value_task3,
            "min_task3" : min_value_task3,
            "avg_task3" : avg_value_task3,
            "max_task4" : max_value_task4,
            "min_task4" : min_value_task4,
            "avg_task4" : avg_value_task4,
            "max_task5" : max_value_task5,
            "min_task5" : min_value_task5,
            "avg_task5" : avg_value_task5,
      };
      
      return core5_value;
}

async function task1_value(){
      console.log(' task1 선택됨');
      max_value_core1 = await task1.max('core1').then(max => {
            return max;
      });
      min_value_core1 = await task1.min('core1').then(min => {
            return min;
      });
      avg_value_core1 = await task1.sum('core1').then(sum => {
            return sum / 10;
      });

      max_value_core2 = await task1.max('core2').then(max => {
            return max;
      });
      min_value_core2 = await task1.min('core2').then(min => {
            return min;
      });
      avg_value_core2 = await task1.sum('core2').then(sum => {
            return sum / 10;
      });

      max_value_core3 = await task1.max('core3').then(max => {
            return max;
      });
      min_value_core3 = await task1.min('core3').then(min => {
            return min;
      });
      avg_value_core3 = await task1.sum('core3').then(sum => {
            return sum / 10;
      });

      max_value_core4 = await task1.max('core4').then(max => {
            return max;
      });
      min_value_core4 = await task1.min('core4').then(min => {
            return min;
      });
      avg_value_core4 = await task1.sum('core4').then(sum => {
            return sum / 10;
      });

      max_value_core5 = await task1.max('core5').then(max => {
            return max;
      });
      min_value_core5 = await task1.min('core5').then(min => {
            return min;
      });
      avg_value_core5 = await task1.sum('core5').then(sum => {
            return sum / 10;
      });
      
      task1_value = {
            "max_core1" : max_value_core1,
            "min_core1" : min_value_core1,
            "avg_core1" : avg_value_core1,
            "max_core2" : max_value_core2,
            "min_core2" : min_value_core2,
            "avg_core2" : avg_value_core2,
            "max_core3" : max_value_core3,
            "min_core3" : min_value_core3,
            "avg_core3" : avg_value_core3,
            "max_core4" : max_value_core4,
            "min_core4" : min_value_core4,
            "avg_core4" : avg_value_core4,
            "max_core5" : max_value_core5,
            "min_core5" : min_value_core5,
            "avg_core5" : avg_value_core5,
      };
      
      return task1_value;
}

async function task2_value(){
      console.log(' task2 선택됨');
      max_value_core1 = await task2.max('core1').then(max => {
            return max;
      });
      min_value_core1 = await task2.min('core1').then(min => {
            return min;
      });
      avg_value_core1 = await task2.sum('core1').then(sum => {
            return sum / 10;
      });

      max_value_core2 = await task2.max('core2').then(max => {
            return max;
      });
      min_value_core2 = await task2.min('core2').then(min => {
            return min;
      });
      avg_value_core2 = await task2.sum('core2').then(sum => {
            return sum / 10;
      });

      max_value_core3 = await task2.max('core3').then(max => {
            return max;
      });
      min_value_core3 = await task2.min('core3').then(min => {
            return min;
      });
      avg_value_core3 = await task2.sum('core3').then(sum => {
            return sum / 10;
      });

      max_value_core4 = await task2.max('core4').then(max => {
            return max;
      });
      min_value_core4 = await task2.min('core4').then(min => {
            return min;
      });
      avg_value_core4 = await task2.sum('core4').then(sum => {
            return sum / 10;
      });

      max_value_core5 = await task2.max('core5').then(max => {
            return max;
      });
      min_value_core5 = await task2.min('core5').then(min => {
            return min;
      });
      avg_value_core5 = await task2.sum('core5').then(sum => {
            return sum / 10;
      });
      
      task2_value = {
            "max_core1" : max_value_core1,
            "min_core1" : min_value_core1,
            "avg_core1" : avg_value_core1,
            "max_core2" : max_value_core2,
            "min_core2" : min_value_core2,
            "avg_core2" : avg_value_core2,
            "max_core3" : max_value_core3,
            "min_core3" : min_value_core3,
            "avg_core3" : avg_value_core3,
            "max_core4" : max_value_core4,
            "min_core4" : min_value_core4,
            "avg_core4" : avg_value_core4,
            "max_core5" : max_value_core5,
            "min_core5" : min_value_core5,
            "avg_core5" : avg_value_core5,
      };
      
      return task2_value;
}

async function task3_value(){
      console.log(' task1 선택됨');
      max_value_core1 = await task3.max('core1').then(max => {
            return max;
      });
      min_value_core1 = await task3.min('core1').then(min => {
            return min;
      });
      avg_value_core1 = await task3.sum('core1').then(sum => {
            return sum / 10;
      });

      max_value_core2 = await task3.max('core2').then(max => {
            return max;
      });
      min_value_core2 = await task3.min('core2').then(min => {
            return min;
      });
      avg_value_core2 = await task3.sum('core2').then(sum => {
            return sum / 10;
      });

      max_value_core3 = await task3.max('core3').then(max => {
            return max;
      });
      min_value_core3 = await task3.min('core3').then(min => {
            return min;
      });
      avg_value_core3 = await task3.sum('core3').then(sum => {
            return sum / 10;
      });

      max_value_core4 = await task3.max('core4').then(max => {
            return max;
      });
      min_value_core4 = await task3.min('core4').then(min => {
            return min;
      });
      avg_value_core4 = await task3.sum('core4').then(sum => {
            return sum / 10;
      });

      max_value_core5 = await task3.max('core5').then(max => {
            return max;
      });
      min_value_core5 = await task3.min('core5').then(min => {
            return min;
      });
      avg_value_core5 = await task3.sum('core5').then(sum => {
            return sum / 10;
      });
      
      task3_value = {
            "max_core1" : max_value_core1,
            "min_core1" : min_value_core1,
            "avg_core1" : avg_value_core1,
            "max_core2" : max_value_core2,
            "min_core2" : min_value_core2,
            "avg_core2" : avg_value_core2,
            "max_core3" : max_value_core3,
            "min_core3" : min_value_core3,
            "avg_core3" : avg_value_core3,
            "max_core4" : max_value_core4,
            "min_core4" : min_value_core4,
            "avg_core4" : avg_value_core4,
            "max_core5" : max_value_core5,
            "min_core5" : min_value_core5,
            "avg_core5" : avg_value_core5,
      };
      
      return task3_value;
}

async function task4_value(){
      console.log(' task4 선택됨');
      max_value_core1 = await task4.max('core1').then(max => {
            return max;
      });
      min_value_core1 = await task4.min('core1').then(min => {
            return min;
      });
      avg_value_core1 = await task4.sum('core1').then(sum => {
            return sum / 10;
      });

      max_value_core2 = await task4.max('core2').then(max => {
            return max;
      });
      min_value_core2 = await task4.min('core2').then(min => {
            return min;
      });
      avg_value_core2 = await task4.sum('core2').then(sum => {
            return sum / 10;
      });

      max_value_core3 = await task4.max('core3').then(max => {
            return max;
      });
      min_value_core3 = await task4.min('core3').then(min => {
            return min;
      });
      avg_value_core3 = await task4.sum('core3').then(sum => {
            return sum / 10;
      });

      max_value_core4 = await task4.max('core4').then(max => {
            return max;
      });
      min_value_core4 = await task4.min('core4').then(min => {
            return min;
      });
      avg_value_core4 = await task4.sum('core4').then(sum => {
            return sum / 10;
      });

      max_value_core5 = await task4.max('core5').then(max => {
            return max;
      });
      min_value_core5 = await task4.min('core5').then(min => {
            return min;
      });
      avg_value_core5 = await task4.sum('core5').then(sum => {
            return sum / 10;
      });
      
      task4_value = {
            "max_core1" : max_value_core1,
            "min_core1" : min_value_core1,
            "avg_core1" : avg_value_core1,
            "max_core2" : max_value_core2,
            "min_core2" : min_value_core2,
            "avg_core2" : avg_value_core2,
            "max_core3" : max_value_core3,
            "min_core3" : min_value_core3,
            "avg_core3" : avg_value_core3,
            "max_core4" : max_value_core4,
            "min_core4" : min_value_core4,
            "avg_core4" : avg_value_core4,
            "max_core5" : max_value_core5,
            "min_core5" : min_value_core5,
            "avg_core5" : avg_value_core5,
      };
      
      return task4_value;
}

async function task5_value(){
      console.log(' task5 선택됨');
      max_value_core1 = await task5.max('core1').then(max => {
            return max;
      });
      min_value_core1 = await task5.min('core1').then(min => {
            return min;
      });
      avg_value_core1 = await task5.sum('core1').then(sum => {
            return sum / 10;
      });

      max_value_core2 = await task5.max('core2').then(max => {
            return max;
      });
      min_value_core2 = await task5.min('core2').then(min => {
            return min;
      });
      avg_value_core2 = await task5.sum('core2').then(sum => {
            return sum / 10;
      });

      max_value_core3 = await task5.max('core3').then(max => {
            return max;
      });
      min_value_core3 = await task5.min('core3').then(min => {
            return min;
      });
      avg_value_core3 = await task5.sum('core3').then(sum => {
            return sum / 10;
      });

      max_value_core4 = await task5.max('core4').then(max => {
            return max;
      });
      min_value_core4 = await task5.min('core4').then(min => {
            return min;
      });
      avg_value_core4 = await task5.sum('core4').then(sum => {
            return sum / 10;
      });

      max_value_core5 = await task5.max('core5').then(max => {
            return max;
      });
      min_value_core5 = await task5.min('core5').then(min => {
            return min;
      });
      avg_value_core5 = await task5.sum('core5').then(sum => {
            return sum / 10;
      });
      
      task5_value = {
            "max_core1" : max_value_core1,
            "min_core1" : min_value_core1,
            "avg_core1" : avg_value_core1,
            "max_core2" : max_value_core2,
            "min_core2" : min_value_core2,
            "avg_core2" : avg_value_core2,
            "max_core3" : max_value_core3,
            "min_core3" : min_value_core3,
            "avg_core3" : avg_value_core3,
            "max_core4" : max_value_core4,
            "min_core4" : min_value_core4,
            "avg_core4" : avg_value_core4,
            "max_core5" : max_value_core5,
            "min_core5" : min_value_core5,
            "avg_core5" : avg_value_core5,
      };
      
      return task5_value;
}
   
module.exports = {core1_value, core2_value, core3_value, core4_value, core5_value, task1_value, task2_value, task3_value, task4_value, task5_value};