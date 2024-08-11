const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.index = (req, res) => {
    res.redirect('/login'); // Chuyển hướng đến trang đăng nhập
  };
  

exports.login = (req, res) => {
  res.render('login'); // Đảm bảo có tệp view tương ứng
};

exports.register = (req, res) => {
  res.render('register'); // Đảm bảo có tệp view tương ứng
};


exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    await User.createUser(username, password);
    res.redirect('/login');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
};

// Hiển thị trang dashboard
exports.showDashboard = (req, res) => {
    res.render('dashboard'); // Đảm bảo có tệp view tương ứng
  };


// Hiển thị trang đăng nhập
exports.showLogin = (req, res) => {
    res.render('login');
  };
  
// Xử lý đăng nhập
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findUserByUsername(username);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Invalid credentials'); // Hoặc hiển thị thông báo lỗi
    }

    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true }); // Lưu token vào cookie
    res.redirect('/dashboard'); // Chuyển hướng đến trang dashboard
  } catch (err) {
    console.error(err); // In lỗi ra console để dễ dàng kiểm tra
    res.status(500).send('Error logging in'); // Thông báo lỗi
  }
};

// Xử lý đăng xuất
exports.logout = (req, res) => {
    res.clearCookie('token'); // Xóa cookie chứa token
    res.redirect('/login'); // Chuyển hướng về trang đăng nhập
  };
  