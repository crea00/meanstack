//index.js

var express = require('express');   // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express();                //express를 실행하여 app object를 초기화 합니다.

// ejs를 사용하기 위해서 express의 view engine에 ejs를 set
app.set("view engine", "ejs");
// app.use는 HTTP method에 상관없이 무조건 실행되는 부분
// __dirname은 nodejs에서 프로그램이 실행중인 파일의 위치를 나타내는 global variable
// 즉, 아래코드는 현재위치/public을 static폴더로 지정하는 명령어
app.use(express.static(__dirname + '/public'));

/*
// app.HTTP method('route', func, func...)의 구조
app.get('/',function (req,res) {    // '/' 위치에 'get'요청을 받는 경우,
 res.send('Hello World!');          // "Hello World!"를 보냅니다.
});
*/

// query를 통해서 이름을 받는 코드, 모든 query는 req.query에 저장
app.get("/hello", function(req,res){
    res.render("hello", {name:req.query.nameQuery});
});

// route Parameter를 통해 이름을 받는 코드, 
//콜론(:)으로 시작되는 route는 해당 부분에 입력되는 route가 req.params에 저장됩니다.
app.get("/hello/:nameParam", function(req,res){
    res.render("hello", {name:req.params.nameParam});
});

app.listen(3000, function(){        //3000번 포트를 사용합니다.
 console.log('Server On!');         //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});