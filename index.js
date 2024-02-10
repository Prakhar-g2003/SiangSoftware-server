const express = require('express')
const storeuser = require('./api/storeuser');
const user = require('./api/user');
const projects = require('./api/project');
const courses = require('./api/courses');
const collabs = require('./api/collabs');
const feed = require('./api/feed');
const port = 3001;
const cors = require('cors');
const http = require('http');
const app = express();
var corsOptions = {
  origin: "*",
  originSuccessStatus: 200
}
app.use(cors(corsOptions));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

// Initialize Firebase
// const app1 = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app1);

app.use(express.json());
app.use('/api', storeuser);
app.use('/api', user);
app.use('/api', projects);
app.use('/api', courses);
app.use('/api', collabs);
app.use('/api', feed);

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});