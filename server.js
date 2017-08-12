var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    
  title:'Article-one | Deep_Kiran'  ,
  heading:'A perfect example',
  content:`     <p>So its been a quite good experience learning from hasura about the application development</p>
        <p>So its been a quite good experience learning from hasura about the application development</p>
        <p>So its been a quite good experience learning from hasura about the application development</p>
        <p>So its been a quite good experience learning from hasura about the application development</p>`
  
};
function createTemplate(data)
{
var title=data.title;    
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
<html>
<head>
    <title>${title}</title>
    <meta name="Viewport" content="width=device-width ,initial-scale=1" />
    <link src="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <a href="/">Home</a>
    <h1>${heading}</h1>
    <div class="container">
        ${content}
    </div>
    
    </body>
</html>


`;
return htmlTemplate;
}   
    





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res)
{
    res.send(createTemplate(articleOne));
});
app.get('/article-two',function(req,res)
{
    res.send("article-two requested");
});
app.get('/article-three',function(req,res)
{
    res.send("article-three requested");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
