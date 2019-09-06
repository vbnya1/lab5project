var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
bodyParser = require('body-parser');

app.use(express.static('images'));
app.use(express.static('css'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.render(__dirname + '/views/index.html');
});

app.get('/index.html', function (req, res) {
    res.render(__dirname + '/views/index.html');
});

app.get('/newTask.html',function(req,res){
    res.render(__dirname + '/views/newTask.html');
});

app.post('/data', function (req, res) {
    console.log(req.body.tname);
    console.log(req.body.tdue);
    console.log(req.body.tdesc);

    var newTask = {
        taskName:req.body.tname,
        taskDue:req.body.tdue,
        taskDesc:req.body.tdesc,
    }
    db.push(newTask);
    res.send('Successfully added!')
})

app.use(express.static('/listTask.html'))

let db = [];
db.push({
    taskName: 'Task A',
    taskDue: '01/01/01',
    taskDesc: 'This is task A'
});
db.push({
    taskName: 'Task B',
    taskDue: '02/02/02',
    taskDesc: 'This is task B'
});
db.push({
    taskName: 'Task C',
    taskDue: '03/03/03',
    taskDesc: 'This is task C'
});
app.get('/listTask.html', function (req, res) {
    res.render('listTask.html', {username: "Guest", taskDb: db});
});

app.listen(8080);
console.log("Server running at: http://127.0.0.1:8080");

