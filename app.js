const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRoutes = require('./routes/index'); // Đảm bảo đường dẫn chính xác
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Thêm middleware cookie-parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes); // Kết nối routes chính
app.use('/', authRoutes); // Kết nối các route liên quan đến xác thực

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
