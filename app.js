const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');

dotenv.config() //dotenv에서 process.env로 만드는 과정 수행
const app = express(); //server 실행. Express <== http를 다 포함함.
app.use(session({secret: 'somevalue'}));
app.set('port', process.env.PORT || 3000); //포트 설정
app.set('views', path.join(__dirname, 'multipart.html'));
app.set('view engine', 'html');
nunjucks.configure('views',  {
      express: app,
      watch: true,
});

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public'))); //client에게 제공할 파일들을 pulic에 모아둠
app.use(express.json()); //json처리하게 설정
app.use(express.urlencoded({extended: false})); // 폼 처리
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
      resave:false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
            httpOnly: true,
            secure: false,
      },
      name: 'session-cookie'
}));

//upload파일 설정
try{
      fs.readdirSync('uploads');
}catch(error){
      console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
      fs.mkdirSync('uploads');
}

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

app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/multipart.html'))
});

app.post('/', 
      upload.fields([{name: 'txt'}]),
      (req, res)=> {
            console.log(req.files, req.body);
            res.send('ok');
      },
);

app.listen(app.get('port'), () => {
      console.log(app.get('port'), '3000번 포트에서 대기 중');
});