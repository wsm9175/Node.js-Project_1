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

var user_file;

var task1_arr = new Array(); 
var task2_arr = new Array();
var task3_arr = new Array();
var task4_arr = new Array();
var task5_arr = new Array();
var core1_arr = new Array();
var core2_arr = new Array();
var core3_arr = new Array();
var core4_arr = new Array();
var core5_arr = new Array();

router.get('/', function(req, res, next) {
   res.render('mainPage');
});

const upload = multer({
      storage: multer.diskStorage({ //올릴 부분에 대한 정보
            destination(req, file, done){ // 실제로 파일이 올라갈 부분 명시
                  done(null, 'uploads/');
            },
            filename(req, file, done){ //파일의 이름 명시를 통해 파일이 겹치는걸 방지
                  const ext = path.extname(file.originalname);
                  user_file = path.basename(file.originalname, ext) + Date.now() + ext; 
                  done(null, user_file);
            },
      }),
      limits: {filesize: 5 * 1024 * 1024}, //파일 사이즈
});

router.post('/', 
      upload.fields([{name: 'txt'}]),
      (req, res, next)=> {
            console.log(req.files, req.body);
            res.send('ok');
            next();
      },
);

router.post('/', async (req, res, next) => {
            await run_pythonModule()
            read_file(user_file);
      }
);

async function run_pythonModule(){
      let dataToSend;
      let python_loc = path.join(__dirname, '../python_module/Alter_file.py');
      console.log(python_loc);
      const python = spawn('python', [python_loc, user_file]);
      python.stdout.on('data', (data) => {
            dataToSend = data.toString();
      })
      python.on('close', (code) => {
            console.log('exit pythonModule');
      })
      for await(const data of python.stdout){
            
      }
}

function read_file(file_name){
      let file_loc = path.join(__dirname,'../process_file/'+ file_name);
      console.log(file_loc);
      //txt 파일을 한줄씩 구분해 array에 삽입
      array = fs.readFileSync(file_loc).toString().split("\n");
      // 한줄씩 구분한 데이터를 요소별로 line에 삽입
      for(var i = 0;i<array.length;i++){
            line = array[i].split('\t');
            insert_data(i%5, line);
      }
      insert_dataToDb();
}
function insert_data(core_num, line){
      //core에는 한 행을 채움. task는 한 셀식 채움 
      switch(core_num){
            case 0: 
                 //core 1(tast1~5 즉 한행을 채움), tast 1~5의 core1필드를 채움
                  for(var i=1;i<6;i++){
                        core1_arr.push(line[i]);
                  }
                  //task1 <- line0
                  task1_arr.push(line[1]);
                  //task2 <- line1
                  task2_arr.push(line[2]);
                  //task3 <- line2
                  task3_arr.push(line[3]);
                  //task4 <- line3
                  task4_arr.push(line[4]);
                   //task5 <- line4
                  task5_arr.push(line[5]);
                  break;
            
            case 1:
                  //core 2(tast1~5 즉 한행을 채움), tast 1~5의 core2필드를 채움
                  for(var i=1;i<6;i++){
                        core2_arr.push(line[i]);
                  }
                   //task1 <- line0
                  task1_arr.push(line[1]);
                   //task2 <- line1
                  task2_arr.push(line[2]);
                   //task3 <- line2
                  task3_arr.push(line[3]);
                   //task4 <- line3
                  task4_arr.push(line[4]);
                    //task5 <- line4
                  task5_arr.push(line[5]);
                  break;
            case 2:
                   //core 3(tast1~5 즉 한행을 채움), tast 1~5의 core3필드를 채움
                  for(var i=1;i<6;i++){
                        core3_arr.push(line[i]);
                  }
                   //task1 <- line0
                  task1_arr.push(line[1]);
                   //task2 <- line1
                  task2_arr.push(line[2]);
                   //task3 <- line2
                  task3_arr.push(line[3]);
                   //task4 <- line
                  task4_arr.push(line[4]);
                    //task5 <- line4
                  task5_arr.push(line[5]);
                  break;
            case 3:
                  //core 4(tast1~5 즉 한행을 채움), tast 1~5의 core4필드를 채움
                   for(var i=1;i<6;i++){
                        core4_arr.push(line[i]);
                  }
                   //task1 <- line0
                  task1_arr.push(line[1]);
                   //task2 <- line1
                  task2_arr.push(line[2]);
                   //task3 <- line2
                  task3_arr.push(line[3]);
                   //task4 <- line3
                  task4_arr.push(line[4]);
                    //task5 <- line
                  task5_arr.push(line[5]);
                  break;
            case 4:
                  //core 5 task1~5 즉 한행을 채움), tast 1~5의 core5필드를 채움
                  for(var i=1;i<6;i++){
                        core5_arr.push(line[i]);
                  }
                   //task1 <- line0
                  task1_arr.push(line[1]);
                   //task2 <- line1
                  task2_arr.push(line[2]);
                   //task3 <- line2
                  task3_arr.push(line[3]);
                   //task4 <- line3
                  task4_arr.push(line[4]);
                    //task5 <- line4
                  task5_arr.push(line[5]);
                  break;
      }
}
function insert_dataToDb(){
      for(var j=0;j<core1_arr.length;j+=5){
            core1.create({
                  task1:core1_arr[j],
                  task2:core1_arr[j+1],
                  task3:core1_arr[j+2],
                  task4:core1_arr[j+3],
                  task5:core1_arr[j+4],
            });
            core2.create({
                  task1:core2_arr[j],
                  task2:core2_arr[j+1],
                  task3:core2_arr[j+2],
                  task4:core2_arr[j+3],
                  task5:core2_arr[j+4],
            });
            core3.create({
                  task1:core3_arr[j],
                  task2:core3_arr[j+1],
                  task3:core3_arr[j+2],
                  task4:core3_arr[j+3],
                  task5:core3_arr[j+4],
            });
            core4.create({
                  task1:core4_arr[j],
                  task2:core4_arr[j+1],
                  task3:core4_arr[j+2],
                  task4:core4_arr[j+3],
                  task5:core4_arr[j+4],
            });
            core5.create({
                  task1:core5_arr[j],
                  task2:core5_arr[j+1],
                  task3:core5_arr[j+2],
                  task4:core5_arr[j+3],
                  task5:core5_arr[j+4],
            });
            task1.create({
                  core1:task1_arr[j],
                  core2:task1_arr[j+1],
                  core3:task1_arr[j+2],
                  core4:task1_arr[j+3],
                  core5:task1_arr[j+4],
            });
            task2.create({
                  core1:task2_arr[j],
                  core2:task2_arr[j+1],
                  core3:task2_arr[j+2],
                  core4:task2_arr[j+3],
                  core5:task2_arr[j+4],
            });
            task3.create({
                  core1:task3_arr[j],
                  core2:task3_arr[j+1],
                  core3:task3_arr[j+2],
                  core4:task3_arr[j+3],
                  core5:task3_arr[j+4],
            });
            task4.create({
                  core1:task4_arr[j],
                  core2:task4_arr[j+1],
                  core3:task4_arr[j+2],
                  core4:task4_arr[j+3],
                  core5:task4_arr[j+4],
            });
            task5.create({
                  core1:task5_arr[j],
                  core2:task5_arr[j+1],
                  core3:task5_arr[j+2],
                  core4:task5_arr[j+3],
                  core5:task5_arr[j+4],
            });
      }
}
   
module.exports = router;