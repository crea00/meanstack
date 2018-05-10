var express = require("express");
var mongoose = require("mongoose");
var app = express();

// DB setting, 환경변수에 저장된 값을 사용하여 mongoDB에 접속.
//mongoose.connect("mongodb://system:mongodb@ds119650.mlab.com:19650/meanstackpractice");
mongoose.connect(process.env.MONGO_DB);
// mongoose의 db object를 가져와 db변수에 넣음.
var db = mongoose.connection;

// db가 성공적으로 연결된 경우 DB connected를 출력
db.once("open", function(){
    console.log("DB connected");
});

// db연결중 에러가 있는 경우 "DB ERROR :" 과 에러를 출력
db.on("error", function(err){
    console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Port setting
app.listen(3000, function(){
    console.log("Server On!");
});