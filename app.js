const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');
const indexRouter = require('./routes/index');
const resultRouter = require('./routes/result');

dotenv.config() //dotenv에서 process.env로 만드는 과정 수행
const app = express(); //server 실행. Express <== http를 다 포함함.
app.set('port', process.env.PORT || 3000); //포트 설정
app.set('view engine', 'html');
nunjucks.configure('views', {
      express: app,
      while: true,
});

sequelize.sync({force: false})
      .then(() => {
            console.log('데이터베이스 연결 성공');
      })
      .catch((err) => {
            console.error(err);
      });
      
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public'))); //client에게 제공할 파일들을 pulic에 모아둠
app.use(express.json()); //json처리하게 설정
app.use(express.urlencoded({extended: false})); // 폼 처리
app.use(cookieParser(process.env.COOKIE_SECRET));

//upload파일 설정
try{
      fs.readdirSync('uploads');
}catch(error){
      console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
      fs.mkdirSync('uploads');
}

app.use('/', indexRouter);
// app.use('/result', resultRouter);


app.listen(app.get('port'), () => {
      console.log(app.get('port'), '3000번 포트에서 대기 중');
});
