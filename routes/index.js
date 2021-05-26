const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const {spawn} = require('child_process');

router.get('/', function(req, res, next) {
   res.render('mainPage');
});

var user_file;
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

router.post('/', (req, res) => {
      let dataToSend;
      let python_loc = path.join(__dirname, '../python_module/Alter_file.py');
      console.log(python_loc);
      const python = spawn('python', [python_loc, user_file]);
      python.stdout.on('data', (data) => {
            dataToSend = data.toString();
            console.log(dataToSend);
      })
      python.on('close', (code) => {
            console.log('exit pythonModule');    
      })
      }
);
module.exports = router;