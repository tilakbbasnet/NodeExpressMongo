const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('./models/db');
require('dotenv/config');
const path = require('path');
const exphbs = require('express-handlebars');

app.use(cors());
//use bodyparser for every route
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import routes
// const postsRoute = require('./routes/posts');
// const usersRoute = require('./routes/users');
const employeeRoute = require('./routes/employeeController');

//middleware
//this is called when specified url is accessed
//code to execute before specified url gets accessed
// app.use('/posts', postsRoute);
// app.use('/users', usersRoute);
app.use('/employees', employeeRoute);

// app.get('/', (req, res) => {
//     res.send('Welcome to Express js');
// });

//Connect to mongo db
// mongoose.connect( process.env.DB_CONNECTION,
//     {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
//     console.log('Connected to DB!')
// });

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname+ '/views/layouts/'}));
app.set('view engine', 'hbs');

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`listening on port ${port}...`));